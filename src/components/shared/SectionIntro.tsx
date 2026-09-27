import { Reveal } from "@/components/motion/Reveal";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { DividerLine } from "@/components/motion/DividerLine";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  kicker: string;
  title: string;
  intro?: string;
  dark?: boolean;
  className?: string;
  children?: React.ReactNode;
};

/**
 * Consistent editorial section opener: hairline rule, kicker, oversized
 * serif title, optional intro paragraph set wide or narrow.
 */
export function SectionIntro({
  kicker,
  title,
  intro,
  dark = false,
  className,
  children,
}: SectionIntroProps) {
  return (
    <div className={cn("wrap", className)}>
      <DividerLine className={dark ? "bg-ivory/20" : ""} />
      <Reveal className="mt-5 md:mt-7">
        <p className={cn("kicker", dark && "text-taupe")}>{kicker}</p>
      </Reveal>
      <div className="mt-8 grid gap-10 md:mt-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-8 lg:col-span-7">
          <AnimatedHeading
            text={title}
            className={cn(
              "serif-display text-h1",
              dark ? "text-ivory" : "text-ink"
            )}
          />
        </div>
        {(intro || children) && (
          <Reveal
            delay={0.25}
            className={cn(
              "md:col-span-4 lg:col-span-4 lg:col-start-9",
              "self-end"
            )}
          >
            {intro && (
              <p
                className={cn(
                  "max-w-md text-balance text-[15px] leading-relaxed",
                  dark ? "text-ivory/70" : "text-warm-gray"
                )}
              >
                {intro}
              </p>
            )}
            {children}
          </Reveal>
        )}
      </div>
    </div>
  );
}
