/**
 * Harrison & Vale — central site configuration.
 * All business information lives here; replace values to rebrand.
 */

export const siteConfig = {
  name: "Harrison & Vale",
  nameUppercase: "HARRISON & VALE",
  descriptor: "Interior Architecture & Design",
  city: "New York",
  foundedYear: 2016,
  url: "https://www.harrisonandvale.com",

  address: {
    street: "48 Walker Street",
    city: "New York",
    state: "NY",
    zip: "10013",
    full: "48 Walker Street, New York, NY 10013",
  },

  phone: "+91 8639865789",
  phoneHref: "tel:+918639865789",
  phoneDisplay: "+91 8639865789",
  email: "venkeypro456@gmail.com",

  social: {
    instagram: {
      handle: "@mrvenky60",
      url: "https://www.instagram.com/mrvenky60/",
    },
    pinterest: {
      label: "Pinterest",
      url: "https://in.pinterest.com/venkyvenkatesh865789/",
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/venky-venkatesh-726172415/",
    },
    website: {
      label: "Website",
      url: "https://3d-portfolio-dun-three-69.vercel.app/",
    },
  },

  regions: "New York City · The Hamptons · Beyond",

  nav: [
    { label: "Projects", href: "/projects/" },
    { label: "Studio", href: "/studio/" },
    { label: "Services", href: "/services/" },
    { label: "Journal", href: "/journal/" },
    { label: "Contact", href: "/contact/" },
  ],

  press: [
    { publication: "Architectural Digest", year: "2026" },
    { publication: "Dezeen", year: "2025" },
    { publication: "Dwell", year: "2025" },
    { publication: "The Local Project", year: "2024" },
    { publication: "Wallpaper*", year: "2024" },
  ],

  meta: {
    title: "Harrison & Vale — Interior Architecture & Design | New York",
    description:
      "Harrison & Vale is a New York interior architecture and design studio creating refined residential, hospitality, and commercial spaces.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
