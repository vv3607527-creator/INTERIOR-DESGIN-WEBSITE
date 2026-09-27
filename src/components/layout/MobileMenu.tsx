"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { siteConfig } from "@/config/site.config";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          className="fixed inset-0 z-[55] flex flex-col bg-ink md:hidden"
          initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
          animate={
            reduce
              ? { opacity: 1 }
              : { clipPath: "inset(0 0 0% 0)" }
          }
          exit={
            reduce
              ? { opacity: 0, transition: { duration: 0.25 } }
              : { clipPath: "inset(0 0 100% 0)", transition: { duration: 0.6, ease: EASE } }
          }
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="flex flex-1 flex-col justify-between px-6 pb-10 pt-24">
            <nav aria-label="Mobile">
              <ul className="space-y-2">
                {siteConfig.nav.map((item, i) => (
                  <li key={item.href} className="overflow-hidden">
                    <motion.div
                      initial={reduce ? undefined : { y: "110%" }}
                      animate={reduce ? undefined : { y: "0%" }}
                      exit={reduce ? undefined : { y: "110%", transition: { duration: 0.35, delay: 0 } }}
                      transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease: EASE }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="serif-display block py-1 text-[2.6rem] text-ivory"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="space-y-6"
            >
              <div className="space-y-1 text-[13px] leading-relaxed text-ivory/60">
                <p>{siteConfig.address.full}</p>
                <p>
                  <a href={siteConfig.phoneHref} className="hover:text-ivory">
                    {siteConfig.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-ivory">
                    {siteConfig.email}
                  </a>
                </p>
              </div>
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] uppercase tracking-wide2 text-taupe"
              >
                Instagram — {siteConfig.social.instagram.handle}
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
