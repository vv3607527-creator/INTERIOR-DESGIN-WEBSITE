"use client";

import { siteConfig } from "@/config/site.config";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { Reveal } from "@/components/motion/Reveal";
import {
  HoverImagePreview,
  HoverPreviewRow,
} from "@/components/shared/HoverImagePreview";

const PRESS_IMAGES = [
  { src: "/images/project-parkave-01.jpg", alt: "Prewar residence interior" },
  { src: "/images/project-west11-03.jpg", alt: "Townhouse parlor floor" },
  { src: "/images/project-mercer-01.jpg", alt: "SoHo loft living space" },
  { src: "/images/project-amagansett-01.jpg", alt: "Amagansett house at dusk" },
  { src: "/images/project-hudson-01.jpg", alt: "Hudson Valley house" },
];

export function Press() {
  return (
    <section aria-label="Selected press" className="bg-sand/60 py-24 md:py-36">
      <SectionIntro kicker="Recognition" title="Selected Press" />

      <div className="wrap mt-14 md:mt-20">
        <HoverImagePreview items={PRESS_IMAGES}>
          <ul>
            {siteConfig.press.map((item, i) => (
              <li key={item.publication}>
                <HoverPreviewRow index={i} className="block">
                  <Reveal delay={i * 0.06}>
                    <div
                      className={`flex items-baseline justify-between gap-6 border-t border-charcoal/15 py-6 md:py-8 ${
                        i === siteConfig.press.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <span className="serif-display text-h3 text-ink transition-transform duration-700 ease-luxe group-hover:translate-x-2">
                        {item.publication}
                      </span>
                      <span className="label-meta">{item.year}</span>
                    </div>
                  </Reveal>
                </HoverPreviewRow>
              </li>
            ))}
          </ul>
        </HoverImagePreview>
      </div>
    </section>
  );
}
