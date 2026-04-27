import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScrollState = () => {
      const firstSection = document.querySelector("main > *:first-child");
      if (!firstSection) return;

      const heroBottom = (firstSection as HTMLElement).getBoundingClientRect().bottom;
      setIsVisible(heroBottom <= 0);
    };

    handleScrollState();
    window.addEventListener("scroll", handleScrollState, { passive: true });
    window.addEventListener("resize", handleScrollState);

    return () => {
      window.removeEventListener("scroll", handleScrollState);
      window.removeEventListener("resize", handleScrollState);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 sm:hidden"
        >
          <div className="bg-[#0170A7] px-4 py-3 shadow-[0_-10px_30px_-16px_rgba(2,18,36,0.45)]">
            <a
              href="https://coincarriere.com/register?type=company"
              className="flex min-h-[52px] w-full items-center justify-center rounded-xl bg-[#0170A7] text-base font-semibold text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/35"
            >
              Publier maintenant
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileStickyCTA;
