import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { TransitionProvider } from "@/components/motion/TransitionProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site.config";

const serif = localFont({
  src: [
    { path: "../fonts/instrument-serif/InstrumentSerif-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/instrument-serif/InstrumentSerif-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
});

const sans = localFont({
  src: [
    { path: "../fonts/instrument/InstrumentSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/instrument/InstrumentSans-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.meta.title,
    template: `%s — Harrison & Vale`,
  },
  description: siteConfig.meta.description,
  openGraph: {
    type: "website",
    siteName: "Harrison & Vale",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: siteConfig.url,
    locale: "en_US",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Harrison & Vale — Interior Architecture & Design, New York" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: ["/images/og-image.jpg"],
  },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  themeColor: "#181713",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="grain bg-ivory font-sans text-charcoal">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory">
          Skip to content
        </a>
        <SiteHeader />
        <TransitionProvider>{children}</TransitionProvider>
        <SiteFooter />
        <FloatingCTA />
        <JsonLd data={organizationSchema} />
      </body>
    </html>
  );
}
