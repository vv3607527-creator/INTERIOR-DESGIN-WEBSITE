"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  src: string;
  alt: string;
  /** CSS aspect-ratio value, e.g. "3 / 2". */
  ratio?: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
  /** Parallax travel in px (image drifts within its crop). */
  parallax?: number;
  /** Slow inner scale on entrance (Ken Burns, very subtle). */
  zoom?: boolean;
  priority?: boolean;
  sizes?: string;
};

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Editorial image entrance: the crop is revealed by an ivory curtain
 * sliding away, with an optional slow settle-zoom and drift parallax.
 */
export function ImageReveal({
  src,
  alt,
  ratio = "3 / 2",
  className,
  imgClassName,
  delay = 0,
  parallax = 0,
  zoom = false,
  priority = false,
  sizes = "100vw",
}: ImageRevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-parallax, parallax]);

  const easing = { duration: 1.3, delay, ease: EASE };

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio: ratio }}
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          // @ts-expect-error fetchpriority is valid HTML
          fetchpriority={priority ? "high" : undefined}
          sizes={sizes}
          className={cn("h-full w-full object-cover", imgClassName)}
          initial={reduce ? undefined : { scale: zoom ? 1.08 : 1.02 }}
          whileInView={reduce ? undefined : { scale: 1 }}
          viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
          transition={easing}
        />
      </motion.div>
      {!reduce && (
        <motion.div
          aria-hidden
          className="absolute inset-0 z-10 bg-ivory"
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
          style={{ transformOrigin: "top" }}
          transition={easing}
        />
      )}
      <noscript>
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      </noscript>
    </div>
  );
}
