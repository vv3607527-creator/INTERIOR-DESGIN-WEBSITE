import Link from "next/link";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center pt-24">
      <div className="wrap">
        <Reveal>
          <p className="kicker">404 — Page not found</p>
        </Reveal>
        <AnimatedHeading
          as="h1"
          text="This room doesn't exist."
          className="serif-display mt-6 max-w-3xl text-display text-ink"
        />
        <Reveal delay={0.25}>
          <p className="mt-8 max-w-md text-pretty text-[15px] leading-relaxed text-warm-gray">
            The page you're looking for has moved, or never existed at all. The work, however, is
            exactly where you left it.
          </p>
          <div className="mt-10 flex flex-wrap gap-8">
            <Link href="/" className="link-line">Home</Link>
            <Link href="/projects/" className="link-line">Projects</Link>
            <Link href="/contact/" className="link-line">Contact</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
