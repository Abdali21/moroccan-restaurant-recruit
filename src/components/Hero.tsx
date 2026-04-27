import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import patternBg from "@/assets/moroccan-pattern.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-surface font-sans animate-fade-in">
      {/* Moroccan pattern background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-repeat opacity-60"
        style={{
          backgroundImage: `url(${patternBg})`,
          backgroundSize: "600px auto",
        }}
      />
      {/* Soft white fade for legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background/85 via-background/70 to-background/85"
      />

      {/* Soft brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />

      {/* Top badges row */}
      <div className="container relative mx-auto flex items-center justify-between px-6 pt-8 sm:pt-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-xs font-medium text-foreground/80 shadow-sm backdrop-blur sm:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          <span className="hidden sm:inline">Première plateforme de recrutement hôtellerie-resto&nbsp;•&nbsp;#1 au Maroc</span>
          <span className="sm:hidden">#1 hôtellerie-resto au Maroc</span>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand sm:text-sm">
          <CheckCircle2 className="h-3.5 w-3.5" />
          100% gratuit
        </div>
      </div>

      <div className="container relative mx-auto px-8 py-12 sm:px-6 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — copy */}
          <div className="flex flex-col items-start text-center lg:text-left">
            {/* Headline */}
            <h1 className="w-full animate-fade-in font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Recrutez du personnel{" "}
              <span className="whitespace-nowrap text-brand">fiable</span>, plus vite
            </h1>

            {/* Sub-headline */}
            <p
              className="mt-8 max-w-xl animate-fade-in text-lg leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl"
              style={{ animationDelay: "120ms", animationFillMode: "backwards" }}
            >
              Arrêtez le chaos WhatsApp et trouvez des candidats sérieux qui honorent leurs shifts.
            </p>

            {/* CTA */}
            <div
              className="mt-10 flex w-full animate-fade-in flex-col items-center gap-5 sm:mt-8 sm:gap-3 lg:items-start"
              style={{ animationDelay: "240ms", animationFillMode: "backwards" }}
            >
              <a
                href="#publier"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-[0_10px_40px_-12px_hsl(var(--brand)/0.5)] transition-all duration-200 hover:bg-brand-hover hover:scale-[1.03] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30 sm:w-auto"
              >
                <span className="sm:hidden">Publier maintenant</span>
                <span className="hidden sm:inline">Publier votre offre maintenant</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>

              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                Gratuit pour commencer<span className="hidden sm:inline">&nbsp;•&nbsp;Aucune carte bancaire requise</span>
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
    </section>
  );
};

export default Hero;