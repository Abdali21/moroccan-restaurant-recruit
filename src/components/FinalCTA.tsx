import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const FinalCTA = () => {
  return (
    <ScrollReveal
      aria-label="Appel a l'action final"
      className="relative overflow-hidden bg-background font-sans [will-change:transform,opacity] [transform:translateZ(0)]"
    >
      <div className="container relative mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-display text-2xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-3xl lg:text-5xl">
            Trouvez votre{" "}
            <span className="whitespace-nowrap font-extrabold text-[#046A9A]">
              talent
            </span>{" "}
            ici
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Trouvez des candidats fiables plus vite. Fini le chaos WhatsApp.
          </p>

          <motion.a
            href="https://coincarriere.com/register?type=company"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0170A7] px-8 py-5 text-base font-semibold text-white shadow-[0_14px_45px_-14px_rgba(1,112,167,0.62)] transition-[background-color,box-shadow,transform] duration-200 hover:bg-[#016491] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0170A7]/35 sm:mt-11 sm:w-auto sm:min-w-[23rem] sm:px-12 sm:py-5 sm:text-lg [will-change:transform,box-shadow] [transform:translateZ(0)]"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
            whileHover={{ scale: 1.02, y: -3 }}
          >
            Publier votre offre maintenant
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground sm:text-base">
            <CheckCircle2 className="h-4 w-4 text-[#0170A7]" />
            Gratuit pour commencer • Aucune carte bancaire requise
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default FinalCTA;