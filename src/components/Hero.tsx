import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-restaurant.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const Hero = () => {
  const fullHeadline = "Recrutez du personnel fiable, plus vite";
  const emphasizedWord = "fiable";
  const emphasizedWordStart = fullHeadline.indexOf(emphasizedWord);

  const [typedHeadline, setTypedHeadline] = useState("");
  const [typingPhase, setTypingPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const typingDelayMs = 135;
    const deletingDelayMs = 80;
    const fullPauseMs = 2500;

    const timeoutId = window.setTimeout(() => {
      if (typingPhase === "typing") {
        if (typedHeadline.length < fullHeadline.length) {
          setTypedHeadline(fullHeadline.slice(0, typedHeadline.length + 1));
          return;
        }
        setTypingPhase("pausing");
        return;
      }

      if (typingPhase === "pausing") {
        setTypingPhase("deleting");
        return;
      }

      if (typedHeadline.length > 0) {
        setTypedHeadline(fullHeadline.slice(0, typedHeadline.length - 1));
        return;
      }

      setTypingPhase("typing");
    }, typingPhase === "pausing" ? fullPauseMs : typingPhase === "typing" ? typingDelayMs : deletingDelayMs);

    return () => window.clearTimeout(timeoutId);
  }, [typedHeadline, typingPhase, fullHeadline]);

  const prefix =
    emphasizedWordStart >= 0
      ? typedHeadline.slice(0, Math.min(typedHeadline.length, emphasizedWordStart))
      : typedHeadline;
  const typedEmphasizedLength =
    emphasizedWordStart >= 0
      ? Math.min(Math.max(typedHeadline.length - emphasizedWordStart, 0), emphasizedWord.length)
      : 0;
  const typedEmphasizedWord = emphasizedWord.slice(0, typedEmphasizedLength);
  const suffix =
    emphasizedWordStart >= 0
      ? typedHeadline.slice(emphasizedWordStart + typedEmphasizedLength)
      : "";

  return (
    <ScrollReveal
      id="hero"
      className="relative overflow-hidden bg-background font-sans [will-change:transform,opacity] [transform:translateZ(0)]"
    >
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

      <div className="container relative mx-auto px-8 py-16 sm:px-6 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT — copy */}
          <div className="flex flex-col items-start text-center lg:text-left">
            {/* Headline */}
            <h1
              className="w-full animate-fade-rise font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.015em] text-foreground [will-change:transform,opacity] sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "120ms" }}
            >
              <span>{prefix}</span>
              {typedEmphasizedWord && (
                <span className="whitespace-nowrap text-brand [text-shadow:0_0_12px_rgba(1,112,167,0.28)]">
                  {typedEmphasizedWord}
                </span>
              )}
              <span>{suffix}</span>
              <motion.span
                aria-hidden="true"
                className="ml-1 inline-block h-[0.94em] w-[3px] rounded-full align-[-0.08em] bg-[#0170A7]"
                animate={{
                  opacity: [1, 0.2, 1],
                  boxShadow: [
                    "0 0 0 rgba(1,112,167,0.0)",
                    "0 0 14px rgba(1,112,167,0.55)",
                    "0 0 0 rgba(1,112,167,0.0)",
                  ],
                }}
                transition={{
                  duration: 1.35,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
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
                href="https://coincarriere.com/register?type=company"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-7 py-4 text-base font-semibold text-brand-foreground shadow-[0_10px_40px_-12px_hsl(var(--brand)/0.5)] [will-change:transform,box-shadow] [transform:translateZ(0)] [backface-visibility:hidden] transition-[background-color,box-shadow] duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30 sm:w-auto"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3.8,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
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