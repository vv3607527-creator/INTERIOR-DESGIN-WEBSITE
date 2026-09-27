import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { JournalEntry } from "@/data/journal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/**
 * Editorial journal feature. `variant` shifts composition so entries
 * don't read as repeated cards.
 */
export function JournalCard({
  entry,
  variant = "portrait",
  className,
}: {
  entry: JournalEntry;
  variant?: "portrait" | "landscape" | "tall";
  className?: string;
}) {
  const ratio =
    variant === "landscape" ? "16 / 10" : variant === "tall" ? "3 / 4" : "4 / 5";

  return (
    <article className={cn("group", className)}>
      <Link href={`/journal/${entry.slug}/`} className="block">
        <ImageReveal
          src={entry.cover.src}
          alt={entry.cover.alt}
          ratio={ratio}
          className="transition-transform duration-700 ease-luxe group-hover:scale-[1.015]"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <p className="label-meta">
            {entry.category} · {entry.date}
          </p>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-stone-500 transition-all duration-500 ease-luxe group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
            aria-hidden
          />
        </div>
        <h3 className="serif-display mt-2 text-h3 text-ink transition-colors duration-500 group-hover:text-warm-gray">
          {entry.title}
        </h3>
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-md text-pretty text-[14px] leading-relaxed text-warm-gray">
            {entry.excerpt}
          </p>
        </Reveal>
      </Link>
    </article>
  );
}
