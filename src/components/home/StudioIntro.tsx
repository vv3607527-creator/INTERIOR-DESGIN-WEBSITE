import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function StudioIntro() {
  return (
    <section aria-label="The studio" className="bg-cream py-28 md:py-44">
      <div className="wrap">
        <Reveal>
          <p className="kicker">Studio</p>
        </Reveal>

        <AnimatedHeading
          as="h2"
          text="Founded in New York in 2016, Harrison & Vale works with a small collaborative team of architects, interior designers, craftspeople, fabricators, artists, and builders."
          className="serif-display mt-8 max-w-4xl text-h2 text-ink"
          stagger={0.018}
        />

        <div className="mt-20 grid gap-16 md:mt-28 md:grid-cols-12 md:gap-8">
          <Founder
            name="Claire Harrison"
            role="Creative Director"
            bio="Claire leads the studio's interior and creative direction. Her work focuses on natural materials, furniture, art, and creating interiors that feel personal without becoming overly styled."
            image="/images/founder-claire.jpg"
            alt="Black-and-white portrait of Claire Harrison"
            delay={0}
          />
          <Founder
            name="Ethan Vale"
            role="Principal Architect"
            bio="Ethan leads architecture, planning, detailing, and construction. His work focuses on proportion, material relationships, adaptive reuse, and integrating contemporary architecture within historic environments."
            image="/images/founder-ethan.jpg"
            alt="Black-and-white portrait of Ethan Vale"
            delay={0.15}
          />
        </div>

        <Reveal className="mt-16 flex justify-end md:mt-20">
          <Link href="/studio/" className="link-line group">
            Inside the Studio
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 ease-luxe group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Founder({
  name,
  role,
  bio,
  image,
  alt,
  delay,
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
  delay: number;
}) {
  return (
    <div className="md:col-span-6">
      <ImageReveal
        src={image}
        alt={alt}
        ratio="4 / 5"
        parallax={24}
        delay={delay}
        className="max-w-md"
        imgClassName="grayscale contrast-[1.04]"
        sizes="(min-width: 768px) 40vw, 100vw"
      />
      <Reveal delay={delay + 0.2}>
        <p className="label-meta mt-5">{role}</p>
        <h3 className="serif-display mt-1.5 text-h3 text-ink">{name}</h3>
        <p className="mt-4 max-w-md text-pretty text-[14px] leading-relaxed text-warm-gray">
          {bio}
        </p>
      </Reveal>
    </div>
  );
}
