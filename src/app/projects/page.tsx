import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { PageHero } from "@/components/shared/PageHero";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected residential, hospitality, and commercial projects by Harrison & Vale across New York City, the Hamptons, and beyond.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker="Portfolio"
        title="Work that holds its silence."
        intro="Apartments, townhouses, houses, and hospitality — a selection of projects completed by the studio."
        image={{
          src: "/images/project-west11-02.jpg",
          alt: "Double-height townhouse entry hall with sculptural staircase",
        }}
      />

      <section aria-label="All projects" className="py-24 md:py-36">
        <div className="wrap grid gap-x-8 gap-y-24 md:grid-cols-12 md:gap-y-40">
          {projects.map((p, i) => (
            <ProjectIndexCard key={p.slug} project={p} position={i} />
          ))}
        </div>
      </section>

      <section aria-label="Enquiries" className="pb-28 md:pb-40">
        <div className="wrap">
          <SectionIntro
            kicker="Enquiries"
            title="Your project, next."
            intro="We take on a limited number of commissions each year. Begin the conversation."
          />
          <Reveal className="mt-10">
            <Link href="/contact/" className="link-line group">
              Start a Project
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-luxe group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/**
 * Alternating editorial compositions: the grid placement varies by index
 * so no two rows read the same.
 */
function ProjectIndexCard({
  project,
  position,
}: {
  project: (typeof projects)[number];
  position: number;
}) {
  const pattern = position % 3;

  if (pattern === 0) {
    return (
      <Reveal className="md:col-span-7">
        <Card project={project} ratio="16 / 10" wide />
      </Reveal>
    );
  }
  if (pattern === 1) {
    return (
      <Reveal delay={0.1} className="md:col-span-4 md:col-start-9 md:-mt-24">
        <Card project={project} ratio="3 / 4" />
      </Reveal>
    );
  }
  return (
    <Reveal className="md:col-span-5 md:col-start-3">
      <Card project={project} ratio="1 / 1" />
    </Reveal>
  );
}

function Card({
  project,
  ratio,
  wide = false,
}: {
  project: (typeof projects)[number];
  ratio: string;
  wide?: boolean;
}) {
  return (
    <article>
      <Link
        href={`/projects/${project.slug}/`}
        aria-label={`${project.title} — ${project.location}`}
        className="group block"
      >
        <ImageReveal
          src={project.card.src}
          alt={project.card.alt}
          ratio={ratio}
          className="transition-transform duration-700 ease-luxe group-hover:scale-[1.012]"
          sizes="(min-width: 768px) 60vw, 100vw"
        />
        <div className={cn("mt-6 flex flex-wrap items-end justify-between gap-4")}>
          <div>
            <p className="kicker">
              {project.index} — {project.location}
            </p>
            <h2 className="serif-display mt-2 text-h3 text-ink">{project.title}</h2>
            <p className="mt-1.5 text-[13px] text-warm-gray">
              {project.scope} · {project.year} · {project.size}
            </p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/20 transition-all duration-500 ease-luxe group-hover:border-charcoal group-hover:bg-charcoal group-hover:text-ivory">
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
        {wide && <p className="mt-4 max-w-md text-pretty text-[14px] leading-relaxed text-warm-gray">{project.intro}</p>}
      </Link>
    </article>
  );
}
