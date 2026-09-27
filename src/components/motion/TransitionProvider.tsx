"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Fades the page in on route change. Client-side navigations between
 * static pages keep the exit instant (static export constraint) and the
 * entrance calm — a soft ivory wipe instead of a heavy shared-layout zoom.
 */
export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const pathname = usePathname();

  if (reduce) return <>{children}</>;

  return (
    <motion.main
      key={pathname}
      id="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.main>
  );
}
