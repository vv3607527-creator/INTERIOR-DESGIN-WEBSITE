import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { DividerLine } from "@/components/motion/DividerLine";
import { Process } from "@/components/home/Process";
import { Press } from "@/components/home/Press";
import { Testimonials } from "@/components/home/Testimonials";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Founded in New York in 2016, Harrison & Vale is a boutique interior architecture studio led by Claire Harrison and Ethan Vale.",
  alternates: { canonical: "/studio/" },
};

export default function StudioPage() {
  return (
    <>
      <PageHero
        kicker="The Studio"
        title="A small studio, deliberately."
        intro="One room of architects and designers in Tribeca, a material library upstate, and a limited number of commissions each year."
        image={{
          src: "/images/studio-team.jpg",
          alt: "The studio workspace with drawings, samples, and natural light",
        }}
      />

      {/* ---------- Story ---------- */}
      <section aria-label="Studio story" className="py-24 md:py-36">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-2">
            <p className="kicker">About</p>
          </Reveal>
          <div className="md:col-span-8">
            <AnimatedHeading
              as="p"
              text="Founded in New York in 2016, Harrison & Vale works with a small collaborative team of architects, interior designers, craftspeople, fabricators, artists, and builders."
              className="serif-display text-h2 text-ink"
              stagger={0.016}
            />
            <Reveal delay={0.3}>
              <p className="mt-10 max-w-lg text-pretty text-[15px] leading-relaxed text-warm-gray">
                The studio takes on a limited number of residential, hospitality, and commercial
                projects each year, working from first principles — proportion, material, light —
                through documentation, construction, and installation. Most work begins with a
                building that already has a point of view; the job is to listen to it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Founders ---------- */}
      <section aria-label="Founders" className="bg-cream py-24 md:py-36">
        <div className="wrap">
          <Reveal>
            <p className="kicker">Founders</p>
          </Reveal>
          <div className="mt-14 grid gap-16 md:grid-cols-12 md:gap-8">
            <Founder
              name="Claire Harrison"
              role="Creative Director"
              bio="Claire leads the studio's interior and creative direction. Her work focuses on natural materials, furniture, art, and creating interiors that feel personal without becoming overly styled."
              image="/images/founder-claire.jpg"
              alt="Portrait of Claire Harrison, Creative Director"
            />
            <Founder
              name="Ethan Vale"
              role="Principal Architect"
              bio="Ethan leads architecture, planning, detailing, and construction. His work focuses on proportion, material relationships, adaptive reuse, and integrating contemporary architecture within historic environments."
              image="/images/founder-ethan.jpg"
              alt="Portrait of Ethan Vale, Principal Architect"
              delay={0.15}
            />
          </div>
        </div>
      </section>

      {/* ---------- Material library interlude ---------- */}
      <section aria-label="Material library" className="py-24 md:py-36">
        <div className="wrap grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="kicker">Upstate</p>
              <h2 className="serif-display mt-6 text-h2 text-ink">
                The material library.
              </h2>
              <p className="mt-6 max-w-md text-pretty text-[15px] leading-relaxed text-warm-gray">
                Every project begins in our Hudson Valley barn — among several thousand samples of
                stone, timber, plaster, textile, and metal, organized by how each material behaves
                in light rather than by vendor.
              </p>
              <Link href="/journal/inside-our-hudson-valley-material-library/" className="link-line group mt-8">
                Read the Journal Entry
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-luxe group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ImageReveal
              src="/images/journal-materials.jpg"
              alt="Stone, timber, and textile samples arranged on a worktable"
              ratio="4 / 3"
              parallax={26}
              zoom
            />
          </div>
        </div>
      </section>

      <Process />
      <Press />
      <Testimonials />

      {/* ---------- CTA ---------- */}
      <section aria-label="Work with the studio" className="pb-28 md:pb-40">
        <div className="wrap">
          <DividerLine />
          <div className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <AnimatedHeading
              as="h2"
              text="Tell us about your project."
              className="serif-display max-w-2xl text-h1 text-ink"
            />
            <Reveal delay={0.2}>
              <Link href="/contact/" className="btn-outline">
                Start a Conversation
                <ArrowUpRight className="ml-3 h-3.5 w-3.5" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Founder({
  name,
  role,
  bio,
  image,
  alt,
  delay = 0,
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
  delay?: number;
}) {
  return (
    <div className="md:col-span-6">
      <ImageReveal src={image} alt={alt} ratio="4 / 5" parallax={24} delay={delay} className="max-w-md" imgClassName="grayscale contrast-[1.04]" />
      <Reveal delay={delay + 0.2}>
        <p className="label-meta mt-5">{role}</p>
        <h3 className="serif-display mt-1.5 text-h3 text-ink">{name}</h3>
        <p className="mt-4 max-w-md text-pretty text-[14px] leading-relaxed text-warm-gray">{bio}</p>
        <p className="label-meta mt-6 !normal-case !tracking-normal text-stone-500">
          {siteConfig.email}
        </p>
      </Reveal>
    </div>
  );
}
