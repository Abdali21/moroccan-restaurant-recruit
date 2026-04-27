import patternBg from "@/assets/moroccan-pattern.jpg";

const COMPANIES = [
  "La Mamounia",
  "Royal Mansour Marrakech",
  "Four Seasons Resort Marrakech",
  "Sofitel Marrakech",
  "Hilton Tangier",
  "Marriott Rabat",
  "Riad Fes",
  "Kasbah Tamadot",
  "Dar Ahlam",
  "La Grande Brasserie",
  "Villa des Orangers",
  "Riad Al Moussika",
  "Hôtel Les Almohades",
  "La Sultana Marrakech",
  "Palais Namaskar",
  "Le Bistrot de la Corniche",
  "Café Maure",
  "Restaurant Le Tangerine",
  "Riad Yasmine",
  "Hotel Villa des Orangers",
];

const SocialProof = () => {
  return (
    <section
      aria-label="Ils nous font confiance"
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

      <div className="container relative mx-auto px-6 py-14 sm:py-20">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
          +500 restaurants & hôtels nous font confiance
        </p>

        {/* Marquee */}
        <div
          className="group relative mt-8 overflow-hidden sm:mt-10"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="flex w-max animate-marquee gap-4 sm:gap-6 [will-change:transform] [transform:translateZ(0)] group-hover:[animation-play-state:paused]">
            {[...COMPANIES, ...COMPANIES].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-14 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-background/70 px-5 font-display text-sm font-semibold text-foreground/55 grayscale backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-background hover:text-brand hover:grayscale-0 sm:h-16 sm:px-7 sm:text-base"
              >
                <span className="whitespace-nowrap tracking-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;