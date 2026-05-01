import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const LOGOS = [
  { name: "La Mamounia", logo: "/images/logos/la-mamounia.webp" },
  { name: "Royal Mansour Marrakech", logo: "/images/logos/royal-mansour.webp" },
  { name: "Four Seasons Resort Marrakech", logo: "/images/logos/four-seasons.webp" },
  { name: "Sofitel Marrakech", logo: "/images/logos/sofitel.webp" },
  { name: "Hilton Tangier", logo: "/images/logos/hilton.webp" },
  { name: "Marriott Rabat", logo: "/images/logos/marriott.webp" },
  { name: "Kasbah Tamadot", logo: "/images/logos/kasbah-tamadot.webp" },
  { name: "Dar Ahlam", logo: "/images/logos/dar-ahlam.webp" },
  { name: "La Grande Brasserie", logo: "/images/logos/la-grande-brasserie.webp" },
];

const TESTIMONIALS = [
  {
    name: "Yassine Farsi",
    role: "Propriétaire • Restaurant Le Tangerine, Marrakech",
    quote: "Avant CoinCarrière, je passais 15 heures par semaine sur WhatsApp à trier 40 réponses pour 2 bons profils. Pendant le Ramadan, j'ai recruté 3 serveurs fiables en moins de 48h. Je n'ai plus jamais eu de no-show.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
  },
  {
    name: "Fatima Zahra El Amrani",
    role: "General Manager • La Sultana Marrakech",
    quote: "La qualité des candidats est exceptionnelle. J'ai enfin arrêté de former des gens qui partent après 2 semaines. Le turnover a baissé de 60% en 3 mois. C'est le meilleur investissement que j'ai fait pour mon équipe.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
  },
  {
    name: "Omar Benjelloun",
    role: "Propriétaire • Riad Fes",
    quote: "En pleine saison (Ramadan + été), j'avais besoin de 7 personnes en urgence. CoinCarrière m'a sauvé la vie. J'ai reçu des profils vérifiés et j'ai tout embauché en 5 jours. Plus jamais les groupes Facebook.",
    rating: 4,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
  },
  {
    name: "Salma Tazi",
    role: "HR Director • Sofitel Marrakech",
    quote: "Le plus gros gain ? Le temps. Je passe de 12 heures par semaine à moins de 3 heures pour recruter. Les profils sont déjà vérifiés, le processus est ultra simple. C'est l'outil le plus efficace que j'ai utilisé au Maroc.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=200",
  },
];

const easePremium: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const SocialProof = () => {
  return (
    <ScrollReveal
      id="ils-nous-font-confiance"
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

        {/* Premium Marquee with Logos */}
        <div className="mt-12 overflow-hidden">
          <div 
            className="flex w-max animate-marquee-slow gap-5 sm:gap-8 [will-change:transform] group-hover:[animation-play-state:paused]"
          >
            {[...LOGOS, ...LOGOS].map((company, index) => (
              <motion.div
                key={index}
                className="group flex h-16 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-white px-8 shadow-sm transition-all duration-300"
                whileHover={{
                  scale: 1.08,
                  y: -4,
                  boxShadow: "0 20px 50px -12px rgba(1, 112, 167, 0.25)",
                  borderColor: "#0170A7",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-9 w-auto object-contain grayscale-[0.35] transition-all duration-500 group-hover:grayscale-0"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20 sm:mt-24">
          <div className="mb-10 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Ce qu’ils disent de nous
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                className="group relative rounded-3xl border border-border/70 bg-white p-9 shadow-[0_20px_60px_-15px_hsl(var(--foreground)/0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_30px_80px_-20px_hsl(var(--brand)/0.25)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: easePremium,
                }}
              >
                {/* Large Quote Mark */}
                <div className="absolute -top-3 right-8 text-[120px] font-serif leading-none text-brand/10">”</div>

                {/* Rating + Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-[#F59E0B] drop-shadow-[0_1px_3px_rgb(245,158,11,0.45)]" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.98 10.11c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-xs font-semibold text-muted-foreground">
                      {testimonial.rating}/5
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-semibold text-emerald-600">
                    ✓ Vérifié
                  </div>
                </div>

                <p className="mt-8 text-[17px] leading-relaxed text-foreground">
                  “{testimonial.quote}”
                </p>

                <div className="mt-9 flex items-center gap-4 border-t border-border/60 pt-6">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-brand/20 shadow-lg">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
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