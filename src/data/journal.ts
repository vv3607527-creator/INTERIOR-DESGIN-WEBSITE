import { img } from "@/lib/utils";

export type JournalEntry = {
  slug: string;
  title: string;
  category: "Materials" | "Architecture" | "Studio";
  date: string;
  readingTime: string;
  cover: { src: string; alt: string; ratio: "portrait" | "landscape" | "tall" };
  excerpt: string;
  paragraphs: string[];
};

export const journalEntries: JournalEntry[] = [
  {
    slug: "the-quiet-materiality-of-natural-stone",
    title: "The Quiet Materiality of Natural Stone",
    category: "Materials",
    date: "September 2026",
    readingTime: "6 min",
    cover: { src: img("journal-stone.jpg"), alt: "Close view of honed travertine surface with natural veining", ratio: "portrait" },
    excerpt:
      "Why we keep returning to travertine, limestone, and marble — and what it means to let a material age in public.",
    paragraphs: [
      "Every project begins with a material shortlist, and on almost every shortlist, stone appears first. Not as decoration, but as structure for the atmosphere of a room — something that carries temperature, weight, and time in a way no manufactured surface quite can.",
      "We specify most of our stone honed rather than polished. A honed surface takes light softly, holds a room at a human temperature, and — crucially — ages honestly. A polished marble bar-top announces itself; a honed travertine island simply becomes part of how the kitchen works.",
      "There is a discipline to restraint. In a recent townhouse we used a single travertine across fireplace, island, and garden floor, changing only the finish. The stone reads as one continuous idea rather than a series of selections.",
      "Clients sometimes worry that stone is fragile. In practice the opposite is true: it records life. An etch, a worn threshold, a slightly darkened hearth — these are the marks of a home being lived in, and they are exactly what we mean when we say a space should become more beautiful with time.",
    ],
  },
  {
    slug: "designing-around-natural-light",
    title: "Designing Around Natural Light",
    category: "Architecture",
    date: "August 2026",
    readingTime: "5 min",
    cover: { src: img("journal-light.jpg"), alt: "Sunlight falling across a plaster wall and wooden bench", ratio: "landscape" },
    excerpt:
      "Light is not a layer added to a project. It is the first material — and often the one we spend the most time on.",
    paragraphs: [
      "Before furniture, before finishes, we chart the light. Every room is visited at morning, noon, and dusk during design development; we note where sun lands in January versus June, and where the room will feel cold or flat in between.",
      "In Manhattan projects the light is usually borrowed — a single exposure, filtered by neighbouring buildings. The design task becomes one of management: shutters, sheers, and apertures that ration the light without wasting it.",
      "Outside the city the problem inverts. In Amagansett, the risk is overexposure, and the architecture responds with deep eaves and lime-washed walls that soften glare. Same material — light — opposite manners.",
      "The test of a finished room is whether the light is still interesting with nothing in it. If the empty room holds your attention at 4 pm in October, the interiors can follow.",
    ],
  },
  {
    slug: "inside-our-hudson-valley-material-library",
    title: "Inside Our Hudson Valley Material Library",
    category: "Studio",
    date: "July 2026",
    readingTime: "4 min",
    cover: { src: img("journal-materials.jpg"), alt: "Material samples arranged on a worktable — stone, wood, textile", ratio: "tall" },
    excerpt:
      "A working barn of samples, mock-ups, and prototypes — and why every client presentation begins outside the city.",
    paragraphs: [
      "Upstate, in a converted barn an hour north of the city, we keep the studio's material library — several thousand samples of stone, timber, plaster, textile, and metal, organized not by vendor but by how each material behaves in light.",
      "Every new project begins here, not in a showroom. Clients hold the actual slab of travertine, lean on the oak threshold mock-up, watch how a linen looks at dusk rather than under showroom LEDs.",
      "The barn also hosts full-scale mock-ups: a section of millwork, a plaster arch, a stair rail. Errors caught at full scale cost an afternoon; caught on site, they cost weeks.",
      "It is also where the studio slows down. The city rewards speed; materiality punishes it. An afternoon among samples recalibrates the eye better than any deadline discipline.",
    ],
  },
];

export function getEntry(slug: string) {
  return journalEntries.find((e) => e.slug === slug);
}
