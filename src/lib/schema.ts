import { siteConfig } from "@/config/site.config";

/** LocalBusiness / ProfessionalService structured data. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  description: siteConfig.meta.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  foundingDate: String(siteConfig.foundedYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  areaServed: [
    "New York City",
    "Brooklyn",
    "The Hamptons",
    "Hudson Valley",
  ],
  sameAs: [
    siteConfig.social.instagram.url,
    siteConfig.social.pinterest.url,
    siteConfig.social.linkedin.url,
  ],
  founder: [
    {
      "@type": "Person",
      name: "Claire Harrison",
      jobTitle: "Creative Director",
    },
    {
      "@type": "Person",
      name: "Ethan Vale",
      jobTitle: "Principal Architect",
    },
  ],
  knowsAbout: [
    "Interior Architecture",
    "Residential Interior Design",
    "Townhouse Renovation",
    "Hospitality Design",
  ],
  priceRange: "$$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};
