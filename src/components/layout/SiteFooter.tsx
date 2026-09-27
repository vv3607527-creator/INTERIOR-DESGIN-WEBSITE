"use client";

"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config/site.config";
import { Reveal } from "@/components/motion/Reveal";
import { DividerLine } from "@/components/motion/DividerLine";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ivory">
      <div className="wrap pb-10 pt-20 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5">
            <p className="kicker !text-taupe">Studio</p>
            <p className="mt-6 font-serif text-[1.6rem] leading-snug text-ivory/90 md:text-[1.9rem]">
              {siteConfig.descriptor}
              <br />
              <span className="text-ivory/50">{siteConfig.regions}</span>
            </p>
            <div className="mt-10 space-y-1.5 text-[14px] leading-relaxed text-ivory/70">
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </p>
              <p className="pt-3">
                <a href={siteConfig.phoneHref} className="transition-colors hover:text-ivory">
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-ivory"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-3 md:col-start-7">
            <p className="kicker !text-taupe">Menu</p>
            <ul className="mt-6 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-[14px] text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {item.label}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-70"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-3 md:col-start-10">
            <p className="kicker !text-taupe">Elsewhere</p>
            <ul className="mt-6 space-y-2.5">
              <li>
                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[14px] text-ivory/75 transition-colors hover:text-ivory"
                >
                  Instagram — {siteConfig.social.instagram.handle}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-70" aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.pinterest.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[14px] text-ivory/75 transition-colors hover:text-ivory"
                >
                  Pinterest
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-70" aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[14px] text-ivory/75 transition-colors hover:text-ivory"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-70" aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.website.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[14px] text-ivory/75 transition-colors hover:text-ivory"
                >
                  Portfolio Website
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-70" aria-hidden />
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <DividerLine className="mt-16 bg-ivory/15 md:mt-20" />

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[12px] text-ivory/40">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="label-meta !text-ivory/40">New York City · The Hamptons · Beyond</p>
          <TopButton />
        </div>
      </div>

      {/* Oversized animated wordmark — letters rise in a masked stagger, then a soft light passes across */}
      <Wordmark />
    </footer>
  );
}

function Wordmark() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const letters = "HARRISON & VALE".split("");

  return (
    <div ref={ref} aria-hidden className="overflow-hidden pb-[0.06em]">
      <p className="serif-display flex items-baseline justify-center whitespace-nowrap text-[11vw] leading-[0.85] text-ivory/[0.08]">
        {letters.map((letter, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block bg-gradient-to-b from-ivory/[0.16] via-ivory/[0.07] to-ivory/[0.03] bg-clip-text text-transparent will-change-transform"
              initial={reduce ? undefined : { y: "110%" }}
              animate={inView || reduce ? { y: "0%" } : { y: "110%" }}
              transition={{
                duration: 1.1,
                delay: reduce ? 0 : 0.15 + i * 0.045,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          </span>
        ))}
      </p>
    </div>
  );
}

function TopButton() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <button
        type="submit"
        className="inline-flex items-center gap-2 text-ivory/60 transition-colors hover:text-ivory"
        aria-label="Back to top"
      >
        Top
        <ArrowUp className="h-3.5 w-3.5" aria-hidden />
      </button>
    </form>
  );
}
