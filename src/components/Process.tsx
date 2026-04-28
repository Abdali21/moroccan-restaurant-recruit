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

const Process = () => {
  return (
    <ScrollReveal
      aria-label="Notre processus"
      className="relative overflow-hidden bg-background font-sans"
    >
      {/* Background Image + Light Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
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
          <h2 className="mt-6 font-display text-2xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-3xl lg:text-5xl">
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
          {/* Animated Connecting Line - Desktop Only */}
          <div className="absolute left-1/2 top-8 hidden h-[3px] w-[72%] -translate-x-1/2 md:block">
            <div className="relative h-full w-full">
              {/* Background Line (lighter) */}
              <div className="absolute inset-0 bg-[#0170A7]/15 rounded-full" />

              {/* Animated Progress Line (thicker + slower) */}
              <motion.div
                className="absolute inset-0 origin-left bg-[#0170A7] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ 
                  duration: 4.4,           // ← Slower (was 1.4)
                  ease: easePremium 
                }}
              />
            </div>
          </div>

          <motion.ol
            className="relative grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {STEPS.map((step, index) => (
              <motion.li
                key={step.number}
                className="group relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Number Circle */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-brand font-display text-2xl font-bold text-brand-foreground ring-4 ring-background transition-all duration-300 group-hover:shadow-[0_18px_40px_-12px_hsl(var(--brand)/0.55)]">
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