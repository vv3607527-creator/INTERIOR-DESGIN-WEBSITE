import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, getProject, getAdjacentProjects } from "@/data/projects";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { DividerLine } from "@/components/motion/DividerLine";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.intro,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: {
      title: `${project.title} — Harrison & Vale`,
      description: project.intro,
      images: [{ url: project.card.src, alt: project.card.alt }],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(params.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    creator: { "@id": `${siteConfig.url}/#organization` },
    locationCreated: project.location,
    dateCreated: project.year,
    description: project.intro,
  };

  return (
    <article>
      <JsonLd data={schema} />

      {/* ---------- Hero ---------- */}
      <header className="relative h-[92svh] overflow-hidden bg-ink">
        <ParallaxImage
          src={project.gallery[0].src}
          alt={project.gallery[0].alt}
          amount={70}
          priority
          className="absolute inset-0 h-full"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/10 to-ink/60" />
        <div className="wrap absolute inset-x-0 bottom-0 pb-14 md:pb-20">
          <Reveal>
            <p className="label-meta !text-ivory/70">
              {project.index} / 06 — {project.location}
            </p>
          </Reveal>
          <AnimatedHeading
            as="h1"
            text={project.title}
            className="serif-display mt-4 max-w-5xl text-display text-ivory"
            stagger={0.05}
          />
          <Reveal delay={0.35}>
            <p className="label-meta mt-6 !text-ivory/70">
              {project.scope} · {project.year} · {project.size}
            </p>
          </Reveal>
        </div>
      </header>

      {/* ---------- Editorial intro ---------- */}
      <section className="py-24 md:py-36">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-2">
            <p className="kicker">Introduction</p>
          </Reveal>
          <div className="md:col-span-8">
            <AnimatedHeading
              as="p"
              text={project.intro}
              className="serif-display text-h2 text-ink"
              stagger={0.014}
            />
          </div>
        </div>
      </section>

      {/* ---------- Gallery sequence ---------- */}
      <GallerySequence project={project} />

      {/* ---------- Prev / Next ---------- */}
      <PrevNext current={project.title} prev={prev} next={next} />
    </article>
  );
}

/* ------------------------------------------------------------------ */

function GallerySequence({ project }: { project: (typeof projects)[number] }) {
  const images = project.gallery;
  const notes = project.notes;

  // Interleave: after the hero image (index 0, already used) place a note
  // after each subsequent image, distributed across the sequence.
  const noteAfter: Record<number, number> = {};
  notes.forEach((_, i) => {
    noteAfter[Math.min(2 + i * 2, images.length - 1)] = i;
  });

  return (
    <section aria-label="Project photography" className="space-y-20 pb-24 md:space-y-32 md:pb-36">
      {images.slice(1).map((image, i) => {
        const noteIdx = noteAfter[i + 1];
        const note = noteIdx !== undefined ? notes[noteIdx] : null;

        return (
          <div key={image.src} className="wrap">
            <GalleryItem image={image} index={i} />
            {note && (
              <Reveal className="mx-auto mt-16 max-w-xl text-center md:mt-24">
                <DividerLine className="mx-auto max-w-[80px]" />
                <p className="mt-8 text-pretty font-serif text-[1.25rem] leading-relaxed text-warm-gray">
                  {note}
                </p>
              </Reveal>
            )}
          </div>
        );
      })}
    </section>
  );
}

function GalleryItem({
  image,
  index,
}: {
  image: (typeof projects)[number]["gallery"][number];
  index: number;
}) {
  switch (image.variant) {
    case "full":
      return (
        <ImageReveal
          src={image.src}
          alt={image.alt}
          ratio="21 / 9"
          zoom
          parallax={24}
          priority={index === 0}
          sizes="100vw"
        />
      );
    case "split-left":
      return (
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <ImageReveal src={image.src} alt={image.alt} ratio="4 / 3" parallax={20} sizes="(min-width: 768px) 58vw, 100vw" />
          </div>
          <Reveal delay={0.2} className="md:col-span-4 md:col-start-9">
            {image.caption && <p className="label-meta">{image.caption}</p>}
          </Reveal>
        </div>
      );
    case "split-right":
      return (
        <div className="grid items-end gap-8 md:grid-cols-12">
          <Reveal delay={0.2} className="order-2 md:order-1 md:col-span-4">
            {image.caption && <p className="label-meta md:text-right">{image.caption}</p>}
          </Reveal>
          <div className="order-1 md:order-2 md:col-span-7 md:col-start-6">
            <ImageReveal src={image.src} alt={image.alt} ratio="4 / 3" parallax={20} sizes="(min-width: 768px) 58vw, 100vw" />
          </div>
        </div>
      );
    case "tall":
      return (
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-5 md:col-start-3">
            <ImageReveal src={image.src} alt={image.alt} ratio="3 / 4" parallax={26} sizes="(min-width: 768px) 42vw, 100vw" />
          </div>
        </div>
      );
    case "detail":
      return (
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-4 md:col-start-8">
            <ImageReveal src={image.src} alt={image.alt} ratio="4 / 5" parallax={16} sizes="(min-width: 768px) 33vw, 100vw" />
            <Reveal delay={0.15}>
              <p className="label-meta mt-4">{image.caption ?? "Detail"}</p>
            </Reveal>
          </div>
        </div>
      );
    case "wide":
    default:
      return <ImageReveal src={image.src} alt={image.alt} ratio="21 / 9" parallax={24} sizes="100vw" />;
  }
}

/* ------------------------------------------------------------------ */

function PrevNext({
  current,
  prev,
  next,
}: {
  current: string;
  prev: (typeof projects)[number];
  next: (typeof projects)[number];
}) {
  return (
    <nav aria-label={`More projects — currently ${current}`} className="bg-ink text-ivory">
      <div className="wrap grid md:grid-cols-2">
        <Link
          href={`/projects/${prev.slug}/`}
          className="group border-b border-ivory/10 py-14 transition-colors hover:bg-ivory/[0.03] md:border-b-0 md:border-r md:py-20 md:pr-16"
        >
          <p className="label-meta !text-taupe">
            <ArrowLeft className="mr-2 inline h-3.5 w-3.5" aria-hidden />
            Previous Project
          </p>
          <p className="serif-display mt-4 text-h2 text-ivory/80 transition-colors duration-500 group-hover:text-ivory">
            {prev.title}
          </p>
          <p className="label-meta mt-3 !text-ivory/50">{prev.location}</p>
        </Link>
        <Link
          href={`/projects/${next.slug}/`}
          className="group border-t border-ivory/10 py-14 text-right transition-colors hover:bg-ivory/[0.03] md:border-t-0 md:py-20 md:pl-16"
        >
          <p className="label-meta !text-taupe">
            Next Project
            <ArrowRight className="ml-2 inline h-3.5 w-3.5" aria-hidden />
          </p>
          <p className="serif-display mt-4 text-h2 text-ivory/80 transition-colors duration-500 group-hover:text-ivory">
            {next.title}
          </p>
          <p className="label-meta mt-3 !text-ivory/50">{next.location}</p>
        </Link>
      </div>
    </nav>
  );
}
