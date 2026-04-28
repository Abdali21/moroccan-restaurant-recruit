import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MobileStickyCTAProps {
  triggerSelector?: string;
  ctaText?: string;
  ctaHref?: string;
}

const MobileStickyCTA = ({
  triggerSelector = "main > *:first-child",
  ctaText = "Publier maintenant",
  ctaHref = "https://coincarriere.com/register?type=company",
}: MobileStickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isManuallyHidden, setIsManuallyHidden] = useState(false);

  // IntersectionObserver - controls when it should appear based on scroll
  useEffect(() => {
    const firstSection = document.querySelector(triggerSelector);
    if (!firstSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(firstSection);
    return () => observer.disconnect();
  }, [triggerSelector]);

  // When user closes the button, hide it for 60 seconds, then show again
  const handleDismiss = () => {
    setIsManuallyHidden(true);

    setTimeout(() => {
      setIsManuallyHidden(false);
    }, 60000); // 60 seconds
  };

  return (
    <AnimatePresence>
      {isVisible && !isManuallyHidden && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
          className="fixed inset-x-0 bottom-0 z-50 sm:hidden pb-[env(safe-area-inset-bottom)]"
        >
          <div className="flex justify-center px-4 pb-4">
            <div className="relative w-full max-w-[280px] rounded-2xl bg-[#0170A7] shadow-[0_-10px_30px_-16px_rgba(2,18,36,0.45)]">
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute -right-2 -top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0170A7] shadow-md hover:bg-gray-100 active:scale-95"
                aria-label="Fermer temporairement"
              >
                ✕
              </button>

              {/* Main Button */}
              <a
                href={ctaHref}
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-[#0170A7] px-8 text-[15px] font-semibold text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 active:scale-[0.985]"
              >
                {ctaText}
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileStickyCTA;