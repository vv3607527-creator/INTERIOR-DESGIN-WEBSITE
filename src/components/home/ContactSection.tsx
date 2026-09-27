import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/shared/ContactForm";
import { DividerLine } from "@/components/motion/DividerLine";
import { siteConfig } from "@/config/site.config";

export function ContactSection() {
  return (
    <section id="contact" aria-label="Contact the studio" className="scroll-mt-24 bg-cream py-28 md:py-44">
      <div className="wrap">
        <DividerLine className="bg-charcoal/15" />
        <div className="mt-5 grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Reveal>
              <p className="kicker">Contact</p>
            </Reveal>
            <AnimatedHeading
              as="h2"
              text="Start a Conversation"
              className="serif-display mt-8 text-h1 text-ink"
            />
            <Reveal delay={0.25}>
              <p className="mt-8 max-w-md text-pretty text-[15px] leading-relaxed text-warm-gray">
                We work on a limited number of residential, hospitality, and commercial projects
                each year. Tell us a little about yours.
              </p>
            </Reveal>

            <Reveal delay={0.35} className="mt-12 space-y-8">
              <div>
                <p className="field-label">Email the Studio</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="link-line text-[14px] !normal-case !tracking-normal"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="field-label">Call the Studio</p>
                <a href={siteConfig.phoneHref} className="link-line text-[14px] !normal-case !tracking-normal">
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="field-label">Visit</p>
                <p className="text-[14px] leading-relaxed text-warm-gray">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  <br />
                  <span className="text-stone-500">By appointment</span>
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="md:col-span-6 md:col-start-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
