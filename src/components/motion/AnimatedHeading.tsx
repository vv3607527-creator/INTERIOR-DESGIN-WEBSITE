"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { ElementType } from "react";

type AnimatedHeadingProps = {
  text: string;
  className?: string;
  as?: ElementType;
  /** Seconds between words. */
  stagger?: number;
  delay?: number;
  once?: boolean;
};

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Word-by-word masked rise. Visibility is driven by a `useInView` hook on
 * the heading element itself (block-level, reliable), and children play
 * staggered variants when it enters the viewport.
 */
export function AnimatedHeading({
  text,
  className,
  as: Tag = "h2",
  stagger = 0.055,
  delay = 0,
  once = true,
}: AnimatedHeadingProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, margin: "-8% 0px -8% 0px" });
  const words = text.split(" ");

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text} ref={ref}>
      <motion.span
        aria-hidden
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: stagger, delayChildren: delay },
          },
        }}
        className="block"
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]"
          >
            <motion.span
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: "112%" },
                visible: {
                  y: "0%",
                  transition: { duration: 1.1, ease: EASE },
                },
              }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
