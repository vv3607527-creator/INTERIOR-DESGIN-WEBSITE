import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { journalEntries, getEntry } from "@/data/journal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { DividerLine } from "@/components/motion/DividerLine";

export function generateStaticParams() {
  return journalEntries.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const entry = getEntry(params.slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.excerpt,
    alternates: { canonical: `/journal/${entry.slug}/` },
    openGraph: {
      type: "article",
      title: entry.title,
      description: entry.excerpt,
      images: [{ url: entry.cover.src, alt: entry.cover.alt }],
    },
  };
}

export default function JournalArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const entry = getEntry(params.slug);
  if (!entry) notFound();

  return (
    <article className="pt-32 md:pt-44">
      <header className="wrap">
        <Reveal>
          <Link href="/journal/" className="link-line !normal-case !tracking-normal text-stone-500">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            Journal
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="label-meta mt-10">
            {entry.category} · {entry.date} · {entry.readingTime} read
          </p>
        </Reveal>
        <AnimatedHeading
          as="h1"
          text={entry.title}
          className="serif-display mt-5 max-w-4xl text-display text-ink"
          stagger={0.04}
        />
      </header>

      <div className="wrap mt-16 md:mt-24">
        <ImageReveal
          src={entry.cover.src}
          alt={entry.cover.alt}
          ratio={entry.cover.ratio === "portrait" ? "3 / 4" : entry.cover.ratio === "tall" ? "3 / 4" : "21 / 9"}
          zoom
          priority
          className={entry.cover.ratio === "landscape" ? "" : "md:max-w-3xl md:mx-auto"}
        />
      </div>

      <div className="wrap mt-16 pb-28 md:mt-24 md:pb-40">
        <div className="mx-auto max-w-xl space-y-8">
          {entry.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i === 0 ? 0.1 : 0}>
              {i === 0 ? (
                <p className="text-pretty font-serif text-[1.35rem] leading-relaxed text-ink">
                  {paragraph}
                </p>
              ) : (
                <p className="text-pretty text-[15px] leading-relaxed text-warm-gray">
                  {paragraph}
                </p>
              )}
            </Reveal>
          ))}

          <DividerLine className="!max-w-[80px] mx-auto !bg-charcoal/25" />

          <Reveal>
            <p className="label-meta text-center">
              Harrison & Vale — {entry.category}
            </p>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
