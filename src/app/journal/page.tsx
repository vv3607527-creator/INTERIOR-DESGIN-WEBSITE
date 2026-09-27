import type { Metadata } from "next";
import { journalEntries } from "@/data/journal";
import { PageHero } from "@/components/shared/PageHero";
import { JournalCard } from "@/components/shared/JournalCard";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes on materials, natural light, and the practice of interior architecture — from the Harrison & Vale studio.",
  alternates: { canonical: "/journal/" },
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        kicker="Journal"
        title="Notes on material, light, and practice."
        intro="Occasional writing from the studio — on what we specify, what we observe, and what we keep learning."
        image={{
          src: "/images/journal-light.jpg",
          alt: "Afternoon light falling across a plaster wall",
        }}
      />

      <section aria-label="Journal entries" className="py-24 md:py-36">
        <div className="wrap grid gap-x-8 gap-y-20 md:grid-cols-12 md:gap-y-32">
          <Reveal className="md:col-span-5">
            <JournalCard entry={journalEntries[0]} variant="portrait" />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 md:col-start-7 md:mt-28">
            <JournalCard entry={journalEntries[1]} variant="landscape" />
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-2">
            <JournalCard entry={journalEntries[2]} variant="tall" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
