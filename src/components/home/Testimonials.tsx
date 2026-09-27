import { testimonials } from "@/data/testimonials";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section aria-label="Client words" className="py-28 md:py-44">
      <div className="wrap">
        <Reveal>
          <p className="kicker">Clients</p>
        </Reveal>

        <div className="mt-16 space-y-24 md:mt-24 md:space-y-36">
          {testimonials.map((t, i) => {
            const flip = i % 2 === 1;
            return (
              <figure
                key={t.name}
                className="grid items-end gap-10 md:grid-cols-12 md:gap-8"
              >
                {/* Portrait */}
                <Reveal
                  delay={0.15}
                  className={cn(
                    "w-40 md:col-span-2 md:w-auto",
                    flip ? "md:order-2 md:col-start-11" : "md:order-1"
                  )}
                >
                  <ImageReveal
                    src={t.image}
                    alt={t.imageAlt}
                    ratio="4 / 5"
                    imgClassName="grayscale"
                    parallax={10}
                    sizes="(min-width: 768px) 16vw, 160px"
                  />
                </Reveal>

                {/* Quote + attribution */}
                <div
                  className={cn(
                    "md:col-span-8",
                    flip ? "md:order-1 md:col-start-3" : "md:order-2 md:col-start-4",
                    flip && "md:text-right"
                  )}
                >
                  <blockquote className="serif-display text-h2 text-ink">
                    <AnimatedHeading text={`“${t.quote}”`} as="p" stagger={0.012} />
                  </blockquote>
                  <Reveal delay={0.3}>
                    <figcaption className="mt-8">
                      <p className="text-[13px] font-medium text-ink">{t.name}</p>
                      <p className="label-meta mt-1">{t.location}</p>
                    </figcaption>
                  </Reveal>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
