import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

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
  "La Mamounia",
  "Sofitel Marrakech",
  "Hilton Tangier",
  "Marriott Rabat",
];

const easePremium: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const SocialProof = () => {
  return (
    <ScrollReveal
      aria-label="Ils nous font confiance"
      className="relative overflow-hidden bg-background font-sans [will-change:transform,opacity] [transform:translateZ(0)]"
    >
      <motion.div
        className="container relative mx-auto px-6 py-16 sm:py-20 lg:py-24"
        initial={{ opacity: 0, y: 12, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easePremium }}
      >
        {/* Top section */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            ILS NOUS FONT CONFIANCE
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            +500 Restaurants &amp; Hôtels
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nous font confiance pour recruter du personnel fiable
          </p>
        </div>

        {/* Middle section — marquee */}
        <div
          className="group relative mt-10 overflow-hidden sm:mt-12"
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
                className="flex h-14 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-white px-5 font-display text-sm font-semibold text-foreground/70 shadow-[0_8px_24px_-18px_hsl(var(--foreground)/0.4)] transition-all duration-300 hover:scale-[1.03] hover:border-brand/30 hover:text-brand sm:h-16 sm:px-7 sm:text-base"
              >
                <span className="whitespace-nowrap tracking-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section — testimonial */}
        <motion.article
          className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border/70 bg-background/90 p-6 shadow-[0_24px_60px_-32px_hsl(var(--foreground)/0.35)] backdrop-blur-sm sm:mt-14 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easePremium, delay: 0.12 }}
        >
          <div className="mb-4 flex items-center gap-3 text-sm font-medium text-muted-foreground">
            <span className="text-base tracking-wide text-[#E3B341]">
              ★ ★ ★ ★ ★
            </span>
            <span>4.9/5 • +280 avis</span>
          </div>
          <p className="text-lg leading-relaxed text-foreground sm:text-xl">
            "CoinCarrière m'a fait gagner plus de 12 heures par semaine. J'ai
            recruté 3 serveurs fiables en moins de 48h pendant le Ramadan."
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-bold tracking-wide text-brand ring-1 ring-brand/20">
              YF
            </div>
            <div>
              <p className="font-display text-base font-semibold text-foreground">
                Yassine Farsi
              </p>
              <p className="text-sm text-muted-foreground">
                Propriétaire • Restaurant Le Tangerine, Marrakech
              </p>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </ScrollReveal>
  );
};

export default SocialProof;