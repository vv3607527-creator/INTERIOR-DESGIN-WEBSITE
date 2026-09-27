import { processStages } from "@/data/process";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { Reveal } from "@/components/motion/Reveal";

export function Process() {
  return (
    <section aria-label="Design process" className="py-28 md:py-44">
      <SectionIntro
        kicker="How We Work"
        title="The Process"
        intro="Six stages, one continuous conversation — from first walk-through to final installation."
      />

      <div className="wrap mt-16 md:mt-24">
        <ol className="relative mx-auto max-w-3xl border-l border-charcoal/15 pl-10 md:pl-16">
          {processStages.map((stage, i) => (
            <li key={stage.index} className="relative pb-14 last:pb-0 md:pb-20">
              <Reveal delay={i * 0.05}>
                <span
                  aria-hidden
                  className="absolute -left-10 top-1.5 flex h-2 w-2 -translate-x-1/2 rounded-full bg-taupe md:-left-16"
                />
                <p className="label-meta">{stage.index}</p>
                <h3 className="serif-display mt-2 text-h3 text-ink">{stage.title}</h3>
                <p className="mt-3 max-w-xl text-pretty text-[14px] leading-relaxed text-warm-gray">
                  {stage.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
