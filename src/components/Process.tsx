import patternBg from "@/assets/moroccan-pattern.jpg";

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

const Process = () => {
  return (
    <section
      aria-label="Notre processus"
      className="relative overflow-hidden bg-surface font-sans animate-fade-rise [will-change:transform,opacity] [transform:translateZ(0)]"
    >
      {/* Moroccan pattern background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-repeat opacity-40"
        style={{
          backgroundImage: `url(${patternBg})`,
          backgroundSize: "600px auto",
        }}
      />
      {/* Soft white wash for legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90"
      />

      <div className="container relative mx-auto px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Simple • Rapide • Efficace
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Du chaos WhatsApp à l'embauche en{" "}
            <span className="whitespace-nowrap text-brand">48h</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Un processus clair en 4 étapes pour recruter du personnel fiable
            sans perdre de temps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 sm:mt-20">
          {/* Connecting line — desktop only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-brand/0 via-brand/40 to-brand/0 md:block"
          />

          <ol className="relative grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-6">
            {STEPS.map((step) => (
              <li
                key={step.number}
                className="group relative flex flex-col items-center text-center transition-transform duration-300 ease-out hover:scale-[1.04] [will-change:transform] [transform:translateZ(0)]"
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
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Process;