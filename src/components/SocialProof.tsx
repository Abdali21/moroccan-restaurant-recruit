import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const LOGOS = [
  { name: "La Mamounia", logo: "/images/logos/la-mamounia.png" },
  { name: "Royal Mansour Marrakech", logo: "/images/logos/royal-mansour.png" },
  { name: "Four Seasons Resort Marrakech", logo: "/images/logos/four-seasons.png" },
  { name: "Sofitel Marrakech", logo: "/images/logos/sofitel.png" },
  { name: "Hilton Tangier", logo: "/images/logos/hilton.png" },
  { name: "Marriott Rabat", logo: "/images/logos/marriott.png" },
  { name: "Riad Fes", logo: "/images/logos/riad-fes.webp" },
  { name: "Kasbah Tamadot", logo: "/images/logos/kasbah-tamadot.png" },
  { name: "Dar Ahlam", logo: "/images/logos/dar-ahlam.png" },
  { name: "La Grande Brasserie", logo: "/images/logos/la-grande-brasserie.png" },
];

const TESTIMONIALS = [
  {
    name: "Yassine Farsi",
    role: "Propriétaire • Restaurant Le Tangerine, Marrakech",
    quote: "CoinCarrière m'a fait gagner plus de 12 heures par semaine. J'ai recruté 3 serveurs fiables en moins de 48h pendant le Ramadan.",
    rating: 5,
    initials: "YF",
  },
  {
    name: "Fatima Zahra Benali",
    role: "General Manager • La Sultana Marrakech",
    quote: "La qualité des candidats est exceptionnelle. J'ai enfin trouvé du personnel qui reste et qui comprend notre exigence de service.",
    rating: 5,
    initials: "FZ",
  },
  {
    name: "Omar El Khayat",
    role: "Propriétaire • Riad Fes",
    quote: "En période de pointe (Ramadan + été), CoinCarrière nous sauve la vie. Nous avons recruté 7 personnes en moins d'une semaine.",
    rating: 5,
    initials: "OE",
  },
  {
    name: "Salma Benjelloun",
    role: "HR Director • Sofitel Marrakech",
    quote: "Le meilleur outil de recrutement que j'ai utilisé au Maroc. Les profils sont vérifiés et le processus est extrêmement simple.",
    rating: 5,
    initials: "SB",
  },
];

const easePremium: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const SocialProof = () => {
  return (
    <ScrollReveal
      aria-label="Ils nous font confiance"
      className="relative overflow-hidden bg-background font-sans"
    >
      <div className="container relative mx-auto px-6 py-16 sm:py-20 lg:py-24">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            ILS NOUS FONT CONFIANCE
          </span>

<h2 className="mt-6 font-display text-2xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
  <span className="font-extrabold" style={{ color: "#076A98" }}>
    +500
  </span>{" "}
  Restaurants &amp; Hôtels
</h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nous font confiance pour recruter du personnel fiable
          </p>
        </div>

        {/* Marquee with Real Logos */}
        <div
          className="group relative mt-10 overflow-hidden sm:mt-12"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="flex w-max animate-marquee [animation-direction:reverse] gap-4 sm:gap-6 [will-change:transform] [transform:translateZ(0)] group-hover:[animation-play-state:paused]">
            {[...LOGOS, ...LOGOS].map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="flex h-14 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-white px-6 shadow-[0_8px_24px_-18px_hsl(var(--foreground)/0.4)] transition-all duration-300 hover:scale-[1.03] hover:border-brand/30 sm:h-16 sm:px-8"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 w-auto object-contain grayscale-[0.3] transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-24 sm:mt-28">
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Ce qu’ils disent de nous
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                className="group rounded-2xl border border-border/70 bg-white p-8 shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_hsl(var(--brand)/0.25)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: easePremium,
                }}
              >
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#E3B341]">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-6 text-[17px] leading-relaxed text-foreground">
                  “{testimonial.quote}”
                </p>

                {/* Author Info */}
                <div className="mt-8 flex items-center gap-4 border-t border-border/60 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand ring-1 ring-brand/20">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default SocialProof;