import { BadgeCheck, BriefcaseBusiness, Hotel } from "lucide-react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  {
    value: 457,
    suffix: "+",
    label: "Restaurants & Hôtels qui recrutent avec nous",
    icon: Hotel,
  },
  {
    value: 4942,
    suffix: "+",
    label: "Offres publiées ce mois-ci",
    icon: BriefcaseBusiness,
  },
  {
    value: 100,
    suffix: "%",
    label: "Gratuit pour commencer • Aucun frais caché",
    icon: BadgeCheck,
  },
];

type CounterProps = {
  value: number;
  suffix: string;
  shouldAnimate: boolean;
};

const easePremium: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const AnimatedCounter = ({ value, suffix, shouldAnimate }: CounterProps) => {
  const count = useMotionValue(0);
  const smoothCount = useSpring(count, { damping: 26, stiffness: 90, mass: 0.85 });
  const displayValue = useTransform(smoothCount, (latest) =>
    Math.round(latest).toLocaleString("fr-FR"),
  );

  useEffect(() => {
    if (!shouldAnimate) return;

    const controls = animate(count, value, {
      duration: 2,
      ease: easePremium,
    });

    return () => controls.stop();
  }, [count, shouldAnimate, value]);

  return (
    <p className="mt-5 font-display text-5xl font-bold leading-none tracking-tight text-[#0170A7] sm:text-6xl">
      <motion.span>{displayValue}</motion.span>
      <span>{suffix}</span>
    </p>
  );
};

const Statistics = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      aria-label="Statistiques CoinCarrière"
      className="relative overflow-hidden bg-surface font-sans [will-change:transform,opacity] [transform:translateZ(0)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: easePremium }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/background.jpg')",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-white/80"
      />

      <div className="container relative mx-auto px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#0170A7]/20 bg-[#0170A7]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0170A7]">
            COINCARRIÈRE EN CHIFFRES
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="font-extrabold text-[#046A9A]">Résultats</span>{" "}
            réels
            </h2>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:gap-7 lg:mt-14 lg:grid-cols-3 lg:gap-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easePremium }}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article
                key={`${stat.value}-${stat.suffix}`}
                className="group rounded-2xl border border-border/70 bg-background/90 px-7 py-8 text-center shadow-[0_18px_45px_-24px_hsl(var(--foreground)/0.2)] backdrop-blur-sm transition-transform duration-300 ease-out hover:scale-[1.03] [transform:translateZ(0)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0170A7]/10 ring-1 ring-[#0170A7]/20 transition-colors duration-300 group-hover:bg-[#0170A7]/15">
                  <Icon className="h-7 w-7 text-[#0170A7]" aria-hidden="true" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} shouldAnimate={isInView} />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {stat.label}
                </p>
              </article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Statistics;
