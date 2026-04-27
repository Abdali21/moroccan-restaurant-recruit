import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const STEPS = [
  {
    number: 1,
    title: "Publiez",
    description: "Publiez votre offre en 2 minutes seulement",
  },
  {
    number: 2,
    title: "Recevez",
    description: "Recevez des candidats sérieux et vérifiés",
  },
  {
    number: 3,
    title: "Évaluez",
    description: "Évaluez et filtrez en quelques clics",
  },
  {
    number: 4,
    title: "Embauchez",
    description: "Embauchez en moins de 48 heures",
  },
];

const easePremium: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const stepsVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easePremium },
  },
};

const Process = () => {
  return (
    <ScrollReveal
      aria-label="Notre processus"
      className="relative overflow-hidden bg-background font-sans [will-change:transform,opacity] [transform:translateZ(0)]"
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
      <div className="container relative mx-auto px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Simple • Rapide • Efficace
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            L'embauche en{" "}
            <span className="whitespace-nowrap font-extrabold text-[#046A9A]">
              48h
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Un processus clair en 4 étapes pour recruter du personnel fiable
            sans perdre de temps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 sm:mt-20">
          {/* Animated connecting line — desktop only */}
          <motion.svg
            aria-hidden="true"
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-4 w-auto md:block"
            viewBox="0 0 100 16"
            preserveAspectRatio="none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <path
              d="M 2 8 L 98 8"
              fill="none"
              stroke="#0170A7"
              strokeWidth="1.2"
              strokeOpacity="0.18"
              strokeLinecap="round"
            />
            <motion.path
              d="M 2 8 L 98 8"
              fill="none"
              stroke="#0170A7"
              strokeWidth="1.6"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 6px rgba(1,112,167,0.45))" }}
              variants={{
                hidden: { pathLength: 0, opacity: 0.35 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 1.35, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
            />
          </motion.svg>

          <motion.ol
            className="relative grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6"
            variants={stepsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {STEPS.map((step) => (
              <motion.li
                key={step.number}
                variants={stepVariants}
                className="group relative flex flex-col items-center text-center transition-transform duration-300 ease-out hover:scale-[1.04] [will-change:transform,opacity] [transform:translateZ(0)]"
              >
                {/* Number circle */}
                <div
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-brand font-display text-2xl font-bold text-brand-foreground ring-4 ring-background transition-shadow duration-300 group-hover:shadow-[0_18px_40px_-12px_hsl(var(--brand)/0.55)]"
                  style={{ boxShadow: "var(--shadow-soft)" }}
                >
                  {step.number}
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-foreground sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Process;