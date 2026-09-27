"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] flex-col overflow-hidden bg-ink"
      aria-label="Introduction"
    >
      {/* Photography */}
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: imgY, scale: imgScale }}
      >
        <motion.img
          src="/images/hero-home.jpg"
          alt="Double-height Tribeca loft living space with floor-to-ceiling windows and sculptural stair"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          initial={reduce ? undefined : { scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: EASE }}
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/10 to-ink/60"
      />

      {/* Vertical annotation, right edge */}
      <motion.p
        aria-hidden
        style={reduce ? undefined : { opacity: fade }}
        className="label-meta absolute right-8 top-1/2 hidden origin-center -translate-y-1/2 rotate-90 text-ivory/40 lg:block"
      >
        48 Walker Street — New York
      </motion.p>

      {/* Typography */}
      <motion.div
        style={reduce ? undefined : { y: textY, opacity: fade }}
        className="wrap relative z-10 mt-auto w-full pb-12 md:pb-16"
      >
        <div className="overflow-hidden">
          <motion.p
            initial={reduce ? undefined : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
            className="label-meta !text-ivory/70"
          >
            New York · Est. 2016
          </motion.p>
        </div>

        <h1 className="sr-only">
          Harrison &amp; Vale — Interior Architecture &amp; Design, New York
        </h1>

        {/* Two-line locked headline: fixed breaking keeps composition stable */}
        <div aria-hidden className="mt-5 md:mt-7">
          <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
            <motion.span
              className="serif-display block text-[clamp(3rem,1.5rem+8.5vw,10rem)] leading-[0.98] text-ivory will-change-transform"
              initial={reduce ? undefined : { y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.3, delay: 0.65, ease: EASE }}
            >
              Spaces with
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.1em] -mb-[0.06em]">
            <motion.span
              className="serif-display block text-[clamp(3rem,1.5rem+8.5vw,10rem)] leading-[0.98] text-ivory will-change-transform md:pl-[8vw]"
              initial={reduce ? undefined : { y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.3, delay: 0.78, ease: EASE }}
            >
              a sense of permanence.
            </motion.span>
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: EASE }}
            className="max-w-md text-balance text-[15px] leading-relaxed text-ivory/75"
          >
            Interior architecture and design shaped by material, light, proportion, and the way
            people live.
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.65, ease: EASE }}
          >
            <Link
              href="#selected-work"
              className="group inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-wide2 text-ivory/85 transition-colors hover:text-ivory"
            >
              Explore Selected Work
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/30 transition-colors duration-500 group-hover:border-ivory/70">
                <motion.span
                  animate={reduce ? undefined : { y: [0, 4, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
                >
                  <ArrowDown className="h-3.5 w-3.5" aria-hidden />
                </motion.span>
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
