export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  image: string;
  imageAlt: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They understood that we wanted the apartment to feel refined without ever feeling precious. The finished home feels completely natural to us.",
    name: "Daniel & Emily Carter",
    location: "Tribeca, New York",
    image: "/images/client-carter.jpg",
    imageAlt: "Portrait of Daniel and Emily Carter",
  },
  {
    quote:
      "The studio managed to preserve everything we loved about the townhouse while completely changing the way we live inside it.",
    name: "Michael Reynolds",
    location: "Greenwich Village, New York",
    image: "/images/client-reynolds.jpg",
    imageAlt: "Portrait of Michael Reynolds",
  },
  {
    quote:
      "Every decision felt considered. Materials, lighting, furniture, and architecture all feel like they belong together.",
    name: "Sarah Mitchell",
    location: "Brooklyn, New York",
    image: "/images/client-mitchell.jpg",
    imageAlt: "Portrait of Sarah Mitchell",
  },
];
