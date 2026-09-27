"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";

export function Philosophy() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={ref}
      aria-label="Philosophy"
      className="relative overflow-hidden bg-ink py-32 text-ivory md:py-52"
    >
      {/* Faint photography deep in the background */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.14]"
        style={reduce ? undefined : { y }}
      >
        <img
          src="/images/philosophy.jpg"
          alt=""
          className="h-[120%] w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      <div className="wrap relative">
        <Reveal>
          <p className="kicker !text-taupe">Philosophy</p>
        </Reveal>

        <AnimatedHeading
          as="h2"
          text="We design spaces meant to become more beautiful with time."
          className="serif-display mt-10 max-w-5xl text-display text-ivory md:mt-14"
          stagger={0.045}
        />

        <Reveal delay={0.35} className="mt-14 md:mt-20">
          <p className="max-w-xl text-pretty text-[15px] leading-relaxed text-ivory/65 md:ml-auto">
            Our approach begins with architecture and proportion. Materials are chosen for how they
            age, light is treated as part of the architecture, and every object is considered in
            relation to the space around it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
