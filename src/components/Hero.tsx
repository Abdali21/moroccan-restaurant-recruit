import { ArrowRight, CheckCircle2, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Subtle dot pattern background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-pattern mask-fade-center opacity-70"
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
              Première plateforme hôtellerie-resto&nbsp;•&nbsp;#1 au Maroc
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Restaurants : Recrutez du personnel{" "}
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
              </span>
              , plus vite
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Arrêtez le chaos WhatsApp et trouvez des candidats sérieux qui se présentent vraiment.
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

            {/* Trust row */}
            <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
              <div className="flex -space-x-2">
                {[
                  "bg-amber-200",
                  "bg-rose-200",
                  "bg-emerald-200",
                  "bg-sky-200",
                ].map((c, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full border-2 border-background ${c}`}
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Approuvé par <span className="font-semibold text-foreground">+500 restaurants</span> au Maroc
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_80px_-20px_hsl(var(--brand)/0.35)] ring-1 ring-border">
              <img
                src={heroImage}
                alt="Manager d'un restaurant marocain moderne accueillant son équipe en cuisine"
                width={1280}
                height={1280}
                className="aspect-[4/5] h-full w-full object-cover sm:aspect-[5/6] lg:aspect-[4/5]"
              />
              {/* Soft brand overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-brand/25 via-transparent to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent"
              />
            </div>

            {/* Floating proof card */}
            <div className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur sm:flex sm:-left-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-semibold text-foreground">+12 candidats</p>
                <p className="text-xs text-muted-foreground">reçus aujourd'hui</p>
              </div>
            </div>

            {/* Floating verified card top */}
            <div className="absolute -top-4 right-4 hidden items-center gap-2 rounded-full border border-border bg-background/95 px-4 py-2 shadow-lg backdrop-blur sm:flex">
              <CheckCircle2 className="h-4 w-4 text-brand" />
              <span className="text-sm font-medium text-foreground">Profils vérifiés</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;