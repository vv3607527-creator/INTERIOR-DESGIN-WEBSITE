import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function Intro() {
  return (
    <section aria-label="About the studio" className="relative overflow-hidden py-28 md:py-44">
      <div className="wrap">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8 lg:col-span-7">
            <AnimatedHeading
              as="h2"
              text="Harrison & Vale is a New York interior architecture studio creating thoughtful residential and hospitality spaces across the city and beyond."
              className="serif-display text-h2 text-ink"
              stagger={0.02}
            />
            <Reveal delay={0.35}>
              <p className="mt-10 max-w-lg text-pretty text-[15px] leading-relaxed text-warm-gray md:mt-14">
                Our work balances architecture, natural materials, craftsmanship, and contemporary
                living to create interiors that feel considered rather than decorated.
              </p>
              <Link
                href="/studio/"
                className="link-line group mt-10"
              >
                About the Studio
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 ease-luxe group-hover:translate-x-1" aria-hidden />
              </Link>
            </Reveal>
          </div>

          <div className="relative md:col-span-4 lg:col-span-4 lg:col-start-9">
            <ImageReveal
              src="/images/intro-studio.jpg"
              alt="Sunlit corner of a townhouse living room with linen seating and oak floor"
              ratio="4 / 5"
              className="md:-mt-24"
              parallax={28}
              zoom
            />
            <Reveal delay={0.2}>
              <p className="label-meta mt-4 !normal-case !tracking-normal">
                West 11th Townhouse — Greenwich Village
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
