import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { HTMLMotionProps } from "framer-motion";

type ScrollRevealProps = HTMLMotionProps<"section">;

const ScrollReveal = ({ children, ...props }: ScrollRevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default ScrollReveal;
