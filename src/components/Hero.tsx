import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-restaurant.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const Hero = () => {
  return (
    <ScrollReveal className="relative overflow-hidden bg-background font-sans [will-change:transform,opacity] [transform:translateZ(0)]">
      {/* Hero background image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/background.jpg')",
        }}
      />
      {/* Very subtle light overlay for readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-white/80"
      />

      {/* Soft brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />

      {/* Top row */}
      <div className="container relative mx-auto flex items-center justify-between px-6 pt-8 sm:pt-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-xs font-medium text-foreground/80 shadow-sm backdrop-blur sm:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          <span className="hidden sm:inline">
            Première plateforme de recrutement hôtellerie-resto&nbsp;•&nbsp;#1 au Maroc
          </span>
          <span className="sm:hidden">#1 hôtellerie-resto au Maroc</span>
        </div>

        {/* Desktop-only top-right CTA */}
        <a
          href="https://coincarriere.com/register?type=company"
          className="hidden lg:inline-flex items-center justify-center rounded-xl bg-[#0170A7] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_28px_-14px_rgba(1,112,167,0.65)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#016491] hover:shadow-[0_14px_32px_-14px_rgba(1,112,167,0.72)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0170A7]/35"
        >
          Publier maintenant
        </a>
      </div>

      <div className="container relative mx-auto px-8 py-12 sm:px-6 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — copy */}
          <div className="flex flex-col items-start text-center lg:text-left">
            {/* Headline */}
            <h1
              className="w-full animate-fade-rise font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground [will-change:transform,opacity] sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "120ms" }}
            >
              Recrutez du personnel{" "}
              <span className="whitespace-nowrap text-brand">fiable</span>, plus vite
            </h1>

            {/* Sub-headline */}
            <p
              className="mt-8 max-w-xl animate-fade-rise text-lg leading-relaxed text-muted-foreground [will-change:transform,opacity] sm:mt-6 sm:text-xl"
              style={{ animationDelay: "260ms" }}
            >
              Arrêtez le chaos WhatsApp et trouvez des candidats sérieux qui honorent leurs shifts.
            </p>

            {/* CTA */}
            <div
              className="mt-10 flex w-full flex-col items-center gap-5 sm:mt-8 sm:gap-3 lg:items-start"
            >
              <motion.a
                href="#publier"
                className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-[0_10px_40px_-12px_hsl(var(--brand)/0.5)] [will-change:transform,box-shadow] [transform:translateZ(0)] [backface-visibility:hidden] transition-[background-color,box-shadow] duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30 sm:w-auto"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
                whileHover={{ y: -2 }}
              >
                <span className="sm:hidden">Publier maintenant</span>
                <span className="hidden sm:inline">Publier votre offre maintenant</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </motion.a>

              <p
                className="flex animate-fade-rise items-center gap-2 text-sm text-muted-foreground [will-change:transform,opacity]"
                style={{ animationDelay: "640ms" }}
              >
                <CheckCircle2 className="h-4 w-4 text-brand" />
                Gratuit pour commencer
                <span className="hidden sm:inline">&nbsp;•&nbsp;Aucune carte bancaire requise</span>
              </p>
            </div>
          </div>

          {/* RIGHT — image (hidden on mobile) */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_80px_-20px_hsl(var(--brand)/0.35)] ring-1 ring-border animate-scale-in">
              <img
                src={heroImage}
                alt="Serveur souriant portant un tablier CoinCarrière dans un restaurant marocain"
                width={1600}
                height={1000}
                className="aspect-[16/10] h-full w-full object-cover object-center"
              />

              {/* Desktop-only moved badge */}
              <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/45 bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#0170A7] shadow-sm backdrop-blur">
                <CheckCircle2 className="h-3.5 w-3.5" />
                100% gratuit
              </div>

              {/* Soft brand overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-brand/15 via-transparent to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Hero;