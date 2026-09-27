"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { services } from "@/data/services";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { Reveal } from "@/components/motion/Reveal";
import {
  HoverImagePreview,
  HoverPreviewRow,
} from "@/components/shared/HoverImagePreview";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const SERVICE_IMAGES = [
  { src: "/images/service-01.jpg", alt: "Interior architecture detailing" },
  { src: "/images/service-02.jpg", alt: "Completed residential interior" },
  { src: "/images/project-west11-05.jpg", alt: "Restored molding detail" },
  { src: "/images/service-04.jpg", alt: "Furniture and material study" },
  { src: "/images/service-05.jpg", alt: "Hospitality interior" },
];

export function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-label="Services" className="py-28 md:py-44">
      <SectionIntro
        kicker="What We Do"
        title="Services"
        intro="A deliberately narrow range of work, practiced deeply — from first spatial sketches to the last object on the shelf."
      />

      <div className="wrap mt-16 md:mt-24">
        <HoverImagePreview items={SERVICE_IMAGES}>
          <ul>
            {services.map((service, i) => (
              <li key={service.index} className={i === services.length - 1 ? "border-b border-charcoal/15" : ""}>
                <HoverPreviewRow index={i} className="block">
                  <ServiceRow
                    index={service.index}
                    title={service.title}
                    description={service.description}
                    open={open === i}
                    onToggle={() => setOpen(open === i ? null : i)}
                  />
                </HoverPreviewRow>
              </li>
            ))}
          </ul>
        </HoverImagePreview>
      </div>
    </section>
  );
}

function ServiceRow({
  index,
  title,
  description,
  open,
  onToggle,
}: {
  index: string;
  title: string;
  description: string;
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-baseline gap-6 border-t border-charcoal/15 py-7 text-left md:gap-12 md:py-9"
      >
        <span className="label-meta pt-1 text-stone-500">{index}</span>
        <span
          className={cn(
            "serif-display flex-1 text-h3 text-ink transition-transform duration-700 ease-luxe",
            !reduce && "group-hover:translate-x-2"
          )}
        >
          {title}
        </span>
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-charcoal/20 transition-all duration-500 ease-luxe",
            open ? "rotate-45 border-charcoal bg-charcoal text-ivory" : "group-hover:border-charcoal"
          )}
          aria-hidden
        >
          <Plus className="h-3.5 w-3.5" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 pb-10 pt-2 md:grid-cols-12 md:pl-[4.5rem]">
              <p className="max-w-xl text-pretty text-[15px] leading-relaxed text-warm-gray md:col-span-7">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
