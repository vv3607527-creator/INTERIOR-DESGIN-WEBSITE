import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Philosophy } from "@/components/home/Philosophy";
import { Services } from "@/components/home/Services";
import { StudioIntro } from "@/components/home/StudioIntro";
import { Process } from "@/components/home/Process";
import { Press } from "@/components/home/Press";
import { Testimonials } from "@/components/home/Testimonials";
import { JournalTeaser } from "@/components/home/JournalTeaser";
import { ContactSection } from "@/components/home/ContactSection";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <SelectedWork />
      <Philosophy />
      <Services />
      <StudioIntro />
      <Process />
      <Press />
      <Testimonials />
      <JournalTeaser />
      <ContactSection />
    </>
  );
}
