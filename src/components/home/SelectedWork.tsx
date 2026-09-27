"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { DividerLine } from "@/components/motion/DividerLine";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function SelectedWork() {
  return (
    <section id="selected-work" aria-label="Selected work" className="scroll-mt-24 pb-28 md:pb-44">
      <SectionIntro
        kicker="Portfolio"
        title="Selected Work"
        intro="Six projects across the city, the coast, and the valley — each an exercise in proportion, material, and restraint."
      />

      <div className="mt-20 space-y-28 md:mt-32 md:space-y-44">
        <ProjectFeature project={projects[0]} />
        <ProjectDuo a={projects[1]} b={projects[2]} />
        <ProjectTall project={projects[3]} />
        <ProjectOffset a={projects[4]} b={projects[5]} />
      </div>

      <div className="wrap mt-24 md:mt-32">
        <DividerLine />
        <Reveal className="mt-8 flex justify-end">
          <Link href="/projects/" className="link-line group">
            View All Projects
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 ease-luxe group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function ProjectMeta({
  project,
  align = "left",
  dark = false,
}: {
  project: Project;
  align?: "left" | "right";
  dark?: boolean;
}) {
  return (
    <div className={cn(align === "right" && "md:text-right")}>
      <p className={cn("kicker", dark && "!text-ivory/60")}>
        {project.index} — {project.location}
      </p>
      <h3
        className={cn(
          "serif-display mt-3 text-h3",
          dark ? "text-ivory" : "text-ink"
        )}
      >
        {project.title}
      </h3>
      <p className={cn("mt-2 text-[13px] text-warm-gray", dark && "!text-ivory/60")}>
        {project.scope} · {project.size}
      </p>
    </div>
  );
}

function ProjectFigure({
  project,
  ratio,
  className,
  imgClassName,
  priority,
  children,
}: {
  project: Project;
  ratio: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <Link
      href={`/projects/${project.slug}/`}
      aria-label={`${project.title} — ${project.location}`}
      className={cn("group block overflow-hidden", className)}
    >
      <motion.div className="relative w-full overflow-hidden" style={{ aspectRatio: ratio }}>
        <motion.img
          src={project.card.src}
          alt={project.card.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn("h-full w-full object-cover will-change-transform", imgClassName)}
          whileHover={reduce ? undefined : { scale: 1.05 }}
          transition={{ duration: 1.4, ease: EASE }}
        />
        {children}
      </motion.div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* 01 — Mercer Street Loft: near-full-viewport feature                 */
/* ------------------------------------------------------------------ */

function ProjectFeature({ project }: { project: Project }) {
  return (
    <article className="wrap">
      <div className="grid gap-6 md:grid-cols-12">
        <Reveal className="md:col-span-10 md:col-start-2">
          <ProjectFigure project={project} ratio="21 / 9" priority />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <ProjectMeta project={project} />
            <ArrowLink slug={project.slug} />
          </div>
        </Reveal>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* 02 + 03 — side-by-side, asymmetric heights, type beside image       */
/* ------------------------------------------------------------------ */

function ProjectDuo({ a, b }: { a: Project; b: Project }) {
  return (
    <article className="wrap">
      <div className="grid gap-14 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-7">
          <ProjectFigure project={a} ratio="4 / 3" />
          <div className="mt-6 flex items-end justify-between gap-4">
            <ProjectMeta project={a} />
            <ArrowLink slug={a.slug} />
          </div>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-4 md:col-start-9 md:mt-32">
          <ProjectFigure project={b} ratio="3 / 4" />
          <div className="mt-6">
            <ProjectMeta project={b} />
            <div className="mt-4">
              <ArrowLink slug={b.slug} />
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* 04 — Amagansett: full-bleed with overlaid type                      */
/* ------------------------------------------------------------------ */

function ProjectTall({ project }: { project: Project }) {
  return (
    <article>
      <div className="relative">
        <Link
          href={`/projects/${project.slug}/`}
          aria-label={`${project.title} — ${project.location}`}
          className="group block"
        >
          <div className="relative h-[86vh] overflow-hidden">
            <motion.img
              src={project.card.src}
              alt={project.card.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              whileHover={useReducedMotion() ? undefined : { scale: 1.04 }}
              transition={{ duration: 1.6, ease: EASE }}
            />
            <div aria-hidden className="absolute inset-0 bg-ink/25 transition-colors duration-700 group-hover:bg-ink/35" />
            <div className="wrap absolute inset-x-0 bottom-0 pb-12 md:pb-16">
              <p className="kicker !text-ivory/70">
                {project.index} — {project.location}
              </p>
              <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
                <h3 className="serif-display text-h1 text-ivory">{project.title}</h3>
                <p className="label-meta !text-ivory/70">
                  {project.scope} · {project.size}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* 05 + 06 — offset pair: narrow vertical + bleeding landscape         */
/* ------------------------------------------------------------------ */

function ProjectOffset({ a, b }: { a: Project; b: Project }) {
  return (
    <article className="wrap">
      <div className="grid gap-14 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-3 md:col-start-2 md:mt-24">
          <ProjectFigure project={a} ratio="3 / 4" />
          <div className="mt-6">
            <ProjectMeta project={a} />
            <div className="mt-4">
              <ArrowLink slug={a.slug} />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-7 md:col-start-6">
          <ProjectFigure project={b} ratio="16 / 10" className="md:-mr-[3.5rem] lg:-mr-[4rem]" />
          <div className="mt-6 flex flex-wrap items-end justify-between gap-4 md:mr-[3.5rem] lg:mr-[4rem]">
            <ProjectMeta project={b} />
            <ArrowLink slug={b.slug} />
          </div>
        </Reveal>
      </div>
    </article>
  );
}

function ArrowLink({ slug }: { slug: string }) {
  return (
    <Link
      href={`/projects/${slug}/`}
      className="group inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-wide2 text-warm-gray transition-colors hover:text-ink"
    >
      View
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-charcoal/20 transition-all duration-500 ease-luxe group-hover:border-charcoal group-hover:bg-charcoal group-hover:text-ivory">
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </Link>
  );
}
