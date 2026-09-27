import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { journalEntries } from "@/data/journal";
import { JournalCard } from "@/components/shared/JournalCard";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function JournalTeaser() {
  const [lead, second, third] = journalEntries;

  return (
    <section aria-label="Journal" className="pb-28 md:pb-44">
      <SectionIntro
        kicker="Notes & Ideas"
        title="Journal"
        intro="Occasional writing on materials, light, and the practice of building calm rooms."
      />

      {/* Lead feature — full-width cinematic */}
      <div className="wrap mt-16 md:mt-24">
        <Reveal>
          <article className="group grid items-end gap-10 md:grid-cols-12">
            <Link
              href={`/journal/${lead.slug}/`}
              className="md:col-span-8"
              aria-label={lead.title}
            >
              <ImageReveal
                src={lead.cover.src}
                alt={lead.cover.alt}
                ratio="16 / 9"
                className="transition-transform duration-700 ease-luxe group-hover:scale-[1.01]"
                sizes="(min-width: 768px) 60vw, 100vw"
              />
            </Link>
            <div className="md:col-span-4">
              <p className="label-meta">
                {lead.category} · {lead.date}
              </p>
              <h3 className="serif-display mt-3 text-h2 text-ink">
                <Link href={`/journal/${lead.slug}/`} className="transition-colors duration-500 group-hover:text-warm-gray">
                  {lead.title}
                </Link>
              </h3>
              <p className="mt-4 max-w-sm text-pretty text-[14px] leading-relaxed text-warm-gray">
                {lead.excerpt}
              </p>
            </div>
          </article>
        </Reveal>
      </div>

      {/* Supporting pair — aligned tops, clear columns */}
      <div className="wrap mt-16 grid gap-x-8 gap-y-14 md:mt-24 md:grid-cols-12">
        <Reveal className="md:col-span-4 md:col-start-2">
          <JournalCard entry={second} variant="landscape" />
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-4 md:col-start-7">
          <JournalCard entry={third} variant="portrait" />
        </Reveal>
      </div>

      <div className="wrap mt-16 md:mt-20">
        <Reveal className="flex justify-end">
          <Link href="/journal/" className="link-line group">
            All Journal Entries
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 ease-luxe group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
