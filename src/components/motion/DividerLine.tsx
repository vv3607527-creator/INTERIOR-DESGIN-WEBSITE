"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Hairline rule that draws itself from the left when scrolled into view. */
export function DividerLine({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={cn("h-px w-full bg-charcoal/15", className)} />;
  return (
    <motion.div
      aria-hidden
      className={cn("h-px w-full origin-left bg-charcoal/15", className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
