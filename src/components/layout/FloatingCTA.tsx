"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FloatingCTA() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setVisible(v > 700);
  });

  const hidden = pathname.startsWith("/contact");

  return (
    <AnimatePresence>
      {visible && !hidden && (
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-10"
        >
          <Link
            href="/contact/"
            className="group inline-flex items-center gap-2.5 rounded-full bg-ink/90 py-3 pl-6 pr-5 text-[12px] font-medium uppercase tracking-wide2 text-ivory shadow-[0_12px_40px_rgba(24,23,19,0.25)] backdrop-blur transition-colors duration-500 hover:bg-ink"
          >
            Start a Project
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-500 ease-luxe group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
