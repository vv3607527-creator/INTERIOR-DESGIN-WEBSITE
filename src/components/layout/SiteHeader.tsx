"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 48);
  });

  const dark = useIsDarkSection(pathname);

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -24, opacity: 0 }}
        animate={{ y: open ? 0 : 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: EASE }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-700 ease-luxe",
          scrolled && !open
            ? "bg-ivory/90 shadow-[0_1px_0_rgba(24,23,19,0.08)] backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="wrap flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            aria-label="Harrison & Vale — home"
            className={cn(
              "font-sans text-[13px] font-medium uppercase tracking-[0.22em] transition-colors duration-500",
              open ? "text-ivory" : dark && !scrolled ? "text-ivory" : "text-ink"
            )}
          >
            {siteConfig.nameUppercase}
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-9">
              {siteConfig.nav.map((item) => {
                const active =
                  item.href === "/contact/"
                    ? pathname.startsWith("/contact")
                    : pathname.startsWith(item.href.replace(/\/$/, ""));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "group relative text-[12px] font-medium uppercase tracking-wide2 transition-colors duration-500",
                        open
                          ? "text-ivory"
                          : dark && !scrolled
                            ? "text-ivory/85 hover:text-ivory"
                            : "text-warm-gray hover:text-ink",
                        active && !open && "text-ink",
                        active && dark && !scrolled && "text-ivory"
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-luxe group-hover:scale-x-100",
                          dark && !scrolled ? "bg-ivory" : "bg-charcoal"
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={cn(
              "relative z-[60] flex h-10 w-10 items-center justify-center md:hidden",
              open ? "text-ivory" : dark && !scrolled ? "text-ivory" : "text-ink"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-3 w-6">
              <span
                className={cn(
                  "absolute left-0 top-0 block h-px w-6 bg-current transition-all duration-500 ease-luxe",
                  open ? "top-1.5 rotate-45" : ""
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 block h-px w-6 bg-current transition-all duration-500 ease-luxe",
                  open ? "top-1.5 -rotate-45" : ""
                )}
              />
            </span>
          </button>
        </div>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

/** Sections with dark hero imagery get light header text until scrolled. */
function useIsDarkSection(pathname: string): boolean {
  // Homepage and project pages open on full-bleed dark photography.
  return (
    pathname === "/" ||
    pathname.startsWith("/projects") ||
    pathname.startsWith("/journal")
  );
}
