"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the reveal begins. */
  delay?: number;
  /** Vertical offset in px. */
  y?: number;
  duration?: number;
  once?: boolean;
};

const EASE = [0.16, 1, 0.3, 1] as const;

/** Fade-and-rise entrance on scroll into view. Honors prefers-reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 1,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
