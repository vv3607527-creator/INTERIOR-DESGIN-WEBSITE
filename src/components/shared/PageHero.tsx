import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  kicker: string;
  title: string;
  intro?: string;
  image: { src: string; alt: string };
  children?: React.ReactNode;
  className?: string;
};

/**
 * Interior-page hero: near-full-height image with a soft bottom gradient,
 * overlaid kicker + oversized serif title.
 */
export function PageHero({ kicker, title, intro, image, children, className }: PageHeroProps) {
  return (
    <header className={cn("relative", className)}>
      <div className="relative h-[68vh] min-h-[480px] w-full overflow-hidden md:h-[76vh]">
        <img
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/60"
        />
        <div className="wrap absolute inset-x-0 bottom-0 pb-14 md:pb-20">
          <Reveal>
            <p className="kicker !text-ivory/70">{kicker}</p>
          </Reveal>
          <AnimatedHeading
            text={title}
            as="h1"
            className="serif-display mt-5 max-w-4xl text-display text-ivory"
          />
          {intro && (
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-xl text-balance text-[15px] leading-relaxed text-ivory/75">
                {intro}
              </p>
            </Reveal>
          )}
          {children}
        </div>
      </div>
    </header>
  );
}
