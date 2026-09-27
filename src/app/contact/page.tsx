import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { Reveal } from "@/components/motion/Reveal";
import { DividerLine } from "@/components/motion/DividerLine";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Harrison & Vale about your residential, hospitality, or commercial project in New York and beyond.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Start a Conversation"
        intro="We work on a limited number of residential, hospitality, and commercial projects each year. Tell us a little about yours."
        image={{
          src: "/images/contact.jpg",
          alt: "The studio at 48 Walker Street with work in progress",
        }}
      />

      <JsonLd data={organizationSchema} />

      <section aria-label="Enquiry form" className="py-24 md:py-36">
        <div className="wrap grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <AnimatedHeading
              as="h2"
              text="The enquiry."
              className="serif-display text-h2 text-ink"
            />
            <Reveal delay={0.2} className="mt-12 space-y-8">
              <div>
                <p className="field-label">Email the Studio</p>
                <a href={`mailto:${siteConfig.email}`} className="link-line !normal-case !tracking-normal text-[14px]">
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="field-label">Call the Studio</p>
                <a href={siteConfig.phoneHref} className="link-line !normal-case !tracking-normal text-[14px]">
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
              <div>
                <p className="field-label">Elsewhere</p>
                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-line !normal-case !tracking-normal text-[14px]"
                >
                  Instagram — {siteConfig.social.instagram.handle}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="md:col-span-7 md:col-start-6">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section aria-label="Studio visit" className="pb-28 md:pb-40">
        <div className="wrap">
          <DividerLine />
          <Reveal className="mt-10">
            <p className="label-meta">{siteConfig.regions}</p>
            <p className="serif-display mt-4 max-w-3xl text-h2 text-ink">
              We take on a small number of commissions each year — and give each one the whole
              studio.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
