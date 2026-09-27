"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Travel in px; image is pre-scaled so no edges show. */
  amount?: number;
  priority?: boolean;
};

/**
 * Continuous scroll-linked parallax for full-bleed imagery.
 * The image is scaled ~8% so the drift never exposes an edge.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  amount = 60,
  priority = false,
}: ParallaxImageProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        // @ts-expect-error fetchpriority is valid HTML
        fetchpriority={priority ? "high" : undefined}
        style={reduce ? undefined : { y, scale: 1.12 }}
        className={cn("h-full w-full object-cover will-change-transform", imgClassName)}
      />
    </div>
  );
}
