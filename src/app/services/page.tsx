import type { Metadata } from "next";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { PageHero } from "@/components/shared/PageHero";
import { Services } from "@/components/home/Services";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior architecture, residential interiors, renovation, furniture & art, and hospitality design by Harrison & Vale.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="A narrow range, practiced deeply."
        intro="From spatial planning and millwork to furniture, art, and final styling — the studio works across the full arc of a project."
        image={{
          src: "/images/service-01.jpg",
          alt: "Custom oak millwork and material samples in a studio workspace",
        }}
      />

      <Services />

      {/* ---------- Imagery strip ---------- */}
      <section aria-label="In detail" className="pb-24 md:pb-36">
        <div className="wrap grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4 md:mt-20">
            <ImageReveal src="/images/service-03.jpg" alt="Stone and timber samples on a worktable" ratio="3 / 4" parallax={20} />
            <p className="label-meta mt-4">Material selection</p>
          </div>
          <div className="md:col-span-4">
            <ImageReveal src="/images/service-02.jpg" alt="Custom furniture and lighting in a completed living room" ratio="4 / 5" parallax={24} />
            <p className="label-meta mt-4">Furniture & styling</p>
          </div>
          <div className="md:col-span-4 md:mt-32">
            <ImageReveal src="/images/service-04.jpg" alt="Architectural drawings and detailing work in progress" ratio="1 / 1" parallax={16} />
            <p className="label-meta mt-4">Documentation & detailing</p>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section aria-label="Enquire" className="pb-28 md:pb-40">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <AnimatedHeading
            as="h2"
            text="Not sure where your project begins?"
            className="serif-display text-h1 text-ink md:col-span-7"
          />
          <Reveal delay={0.2} className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="text-pretty text-[15px] leading-relaxed text-warm-gray">
              Most engagements start with a conversation about the building and the life it will
              hold. We&apos;ll help you find the scope.
            </p>
            <Link href="/contact/" className="link-line group mt-6">
              Start a Conversation
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-luxe group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
