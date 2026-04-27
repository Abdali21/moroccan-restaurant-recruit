import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";
import patternBg from "@/assets/moroccan-pattern.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-surface font-sans">
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

      <div className="container relative mx-auto px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — copy */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              Première plateforme de recrutement hôtellerie-resto&nbsp;•&nbsp;#1 au Maroc
            </div>

            {/* Headline */}
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Recrutez du personnel{" "}
              <span className="relative whitespace-nowrap text-brand">
                fiable
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  className="absolute -bottom-2 left-0 h-2 w-full text-brand/40"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q 50 2, 100 6 T 198 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              qui se présente vraiment
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Arrêtez le chaos WhatsApp et trouvez des candidats sérieux qui honorent leurs shifts.
            </p>

            {/* CTA */}
            <div className="mt-8 flex w-full flex-col items-start gap-3 sm:w-auto">
              <a
                href="#publier"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-[0_10px_40px_-12px_hsl(var(--brand)/0.5)] transition-all hover:bg-brand-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30 sm:w-auto"
              >
                Publier votre offre maintenant
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>

              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                Gratuit pour commencer&nbsp;•&nbsp;Aucune carte bancaire requise
              </p>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_80px_-20px_hsl(var(--brand)/0.35)] ring-1 ring-border">
              <img
                src={heroImage}
                alt="Serveur souriant portant un tablier CoinCarrière dans un restaurant marocain"
                width={1280}
                height={1280}
                className="aspect-[4/5] h-full w-full object-cover sm:aspect-[5/6] lg:aspect-[4/5]"
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