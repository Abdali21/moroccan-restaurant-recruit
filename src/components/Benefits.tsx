import {
  CheckCircle2,
  PhoneOff,
  Clock,
  Rocket,
  HeartHandshake,
  Headset,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

type Benefit = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const BENEFITS: Benefit[] = [
  {
    title: "Finis les no-shows",
    description:
      "Candidats sérieux qui honorent leurs shifts. Plus de formations perdues.",
    Icon: CheckCircle2,
  },
  {
    title: "Plus de chaos WhatsApp",
    description:
      "Seulement les candidats qualifiés et vérifiés. Fini les 40 messages inutiles.",
    Icon: PhoneOff,
  },
  {
    title: "Gagnez des heures chaque semaine",
    description:
      "Postez une seule fois et recevez des candidatures sans appeler tout le monde.",
    Icon: Clock,
  },
  {
    title: "Recrutez plus vite en période de pointe",
    description:
      "Priorité pendant Ramadan et l'été, quand vous avez le plus besoin de main d'œuvre.",
    Icon: Rocket,
  },
  {
    title: "Réduisez le turnover",
    description:
      "Meilleure adéquation = moins de départs et de formations inutiles. Économisez du temps et de l'argent.",
    Icon: HeartHandshake,
  },
  {
    title: "Support dédié par des pros du métier",
    description:
      "Une équipe qui comprend vraiment la réalité des restaurants et hôtels au Maroc.",
    Icon: Headset,
  },
];

const easePremium: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easePremium },
  },
};

const Benefits = () => {
  return (
    <ScrollReveal
      aria-label="Nos avantages"
      className="relative overflow-hidden bg-background font-sans [will-change:transform,opacity] [transform:translateZ(0)]"
    >
      <div className="container relative mx-auto px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Pourquoi les restaurateurs choisissent CoinCarrière
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Nos{" "}
            <span className="whitespace-nowrap font-extrabold text-[#046A9A]">
            Avantages
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <motion.ul
          className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {BENEFITS.map(({ title, description, Icon }) => (
            <motion.li
              key={title}
              variants={cardVariants}
              className="group relative flex flex-col rounded-2xl border border-border/70 bg-background/80 p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-brand/40 hover:bg-background hover:shadow-[0_22px_50px_-20px_hsl(var(--brand)/0.35)] sm:p-7 [will-change:transform,opacity] [transform:translateZ(0)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/15 transition-all duration-300 group-hover:bg-brand group-hover:text-brand-foreground group-hover:ring-brand sm:h-14 sm:w-14">
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-foreground sm:text-xl">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </ScrollReveal>
  );
};

export default Benefits;
