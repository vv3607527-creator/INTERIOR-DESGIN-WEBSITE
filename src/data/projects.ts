import { img } from "@/lib/utils";

export type ProjectImage = {
  src: string;
  alt: string;
  /** Layout hint for the case-study sequence. */
  variant: "full" | "split-left" | "split-right" | "tall" | "detail" | "wide";
  caption?: string;
};

export type Project = {
  slug: string;
  index: string; // "01"
  title: string;
  location: string;
  neighborhood: string;
  scope: string;
  year: string;
  size: string;
  /** Homepage card composition. */
  card: {
    src: string;
    alt: string;
    ratio: "portrait" | "landscape" | "tall" | "square" | "wide";
  };
  intro: string;
  /** Case-study image sequence. */
  gallery: ProjectImage[];
  /** Short notes woven between photos. */
  notes: string[];
};

export const projects: Project[] = [
  {
    slug: "mercer-street-loft",
    index: "01",
    title: "Mercer Street Loft",
    location: "SoHo, New York",
    neighborhood: "SoHo",
    scope: "Residential Interior",
    year: "2025",
    size: "4,200 sq ft",
    card: { src: img("project-mercer-01.jpg"), alt: "Cast-iron columned loft living space with tall SoHo windows", ratio: "wide" },
    intro:
      "A full-floor cast-iron loft in SoHo, opened toward its original column line and rebuilt around natural light, raw plaster, and the building's industrial bones.",
    gallery: [
      { src: img("project-mercer-01.jpg"), alt: "Loft living space with cast-iron columns and tall factory windows", variant: "full" },
      { src: img("project-mercer-02.jpg"), alt: "Open kitchen with plaster hood and oak cabinetry", variant: "split-left" },
      { src: img("project-mercer-03.jpg"), alt: "Primary bedroom with linen bedding and shaded light", variant: "split-right" },
      { src: img("project-mercer-04.jpg"), alt: "Detail of oak millwork and plaster wall junction", variant: "detail" },
      { src: img("project-mercer-05.jpg"), alt: "Reading corner with lounge chair and floor lamp", variant: "tall" },
      { src: img("project-mercer-06.jpg"), alt: "Dining space under industrial ceiling", variant: "wide" },
    ],
    notes: [
      "The original cast-iron columns were left exposed and sandblasted; new walls in raw lime plaster were set back to keep the column rhythm legible.",
      "Oak cabinetry runs unbroken through kitchen and wardrobe walls, detailed without visible hardware so the grain reads as the only ornament.",
      "A restrained palette — plaster, oak, linen, patinated steel — lets the changing SoHo light carry the atmosphere through the day.",
    ],
  },
  {
    slug: "west-11th-townhouse",
    index: "02",
    title: "West 11th Townhouse",
    location: "Greenwich Village, New York",
    neighborhood: "Greenwich Village",
    scope: "Architecture + Interior Design",
    year: "2025",
    size: "6,800 sq ft",
    card: { src: img("project-west11-01.jpg"), alt: "Restored Greenwich Village townhouse facade with black ironwork", ratio: "portrait" },
    intro:
      "A nineteenth-century Greenwich Village townhouse reimagined as a quiet contemporary home while preserving the proportions, craftsmanship, and character of the original structure.",
    gallery: [
      { src: img("project-west11-01.jpg"), alt: "Restored townhouse facade with reconstructed cornice and ironwork", variant: "full" },
      { src: img("project-west11-02.jpg"), alt: "Double-height entry hall with original staircase and new oak rail", variant: "full" },
      { src: img("project-west11-03.jpg"), alt: "Parlor floor living room with restored moldings and travertine fireplace", variant: "split-left" },
      { src: img("project-west11-04.jpg"), alt: "North-facing study with plaster walls and reading chair", variant: "split-right" },
      { src: img("project-west11-05.jpg"), alt: "Detail of restored historic molding and plaster ceiling", variant: "detail" },
      { src: img("project-west11-06.jpg"), alt: "Kitchen with travertine island and bronze pendants", variant: "wide" },
      { src: img("project-west11-07.jpg"), alt: "Custom oak millwork and integrated seating", variant: "detail" },
      { src: img("project-west11-08.jpg"), alt: "Primary bedroom with corner windows over tree canopies", variant: "tall" },
      { src: img("project-west11-09.jpg"), alt: "Garden level with limestone floor and steel doors", variant: "wide" },
    ],
    notes: [
      "Natural oak lines the staircase and library walls — new work detailed to sit quietly beside the craftsmanship of the original house.",
      "Travertine surfaces — fireplace surround, kitchen island, garden-level floors — were chosen for how they wear, honed rather than polished.",
      "Original moldings were restored rather than replaced, then allowed to frame contemporary rooms without decoration.",
      "Custom millwork throughout was drawn from the house's own proportions, measured from surviving doors and panel profiles.",
      "South light is filtered through restored shutters; north light is left clear for reading and work.",
    ],
  },
  {
    slug: "park-avenue-residence",
    index: "03",
    title: "Park Avenue Residence",
    location: "Upper East Side, New York",
    neighborhood: "Upper East Side",
    scope: "Residential Interior",
    year: "2024",
    size: "5,100 sq ft",
    card: { src: img("project-parkave-01.jpg"), alt: "Refined prewar residence living room with paneled walls", ratio: "landscape" },
    intro:
      "A prewar Park Avenue apartment re-composed for a collecting family — paneled rooms kept, plan opened, and every surface quieted so the art and the light lead.",
    gallery: [
      { src: img("project-parkave-01.jpg"), alt: "Prewar living room with restored paneling and curated seating", variant: "full" },
      { src: img("project-parkave-02.jpg"), alt: "Gallery hall with art wall and linen runner", variant: "split-left" },
      { src: img("project-parkave-03.jpg"), alt: "Dining room with plaster chandelier and oak table", variant: "split-right" },
      { src: img("project-parkave-04.jpg"), alt: "Detail of bronze hardware on oak doors", variant: "detail" },
      { src: img("project-parkave-05.jpg"), alt: "Primary bedroom in chalk and cream tones", variant: "tall" },
      { src: img("project-parkave-06.jpg"), alt: "Library with floor-to-ceiling millwork", variant: "wide" },
    ],
    notes: [
      "Original paneling was kept and re-finished in chalk; new openings were cut to align with existing sightlines rather than erase them.",
      "A gallery hall in warm white places the collection on continuous linen-wrapped walls, lit to 3000K from a concealed cove.",
      "Every handle, hinge, and switch was specified in unlacquered brass, allowed to patinate in place.",
    ],
  },
  {
    slug: "amagansett-house",
    index: "04",
    title: "Amagansett House",
    location: "The Hamptons, New York",
    neighborhood: "The Hamptons",
    scope: "Residential Architecture",
    year: "2024",
    size: "7,400 sq ft",
    card: { src: img("project-amagansett-01.jpg"), alt: "Shingle-clad house among dunes at dusk", ratio: "wide" },
    intro:
      "A shingled house set behind the dunes in Amagansett — a long, low composition of weathering cedar, lime-washed walls, and rooms that hold the horizon.",
    gallery: [
      { src: img("project-amagansett-01.jpg"), alt: "Shingled Amagansett house at dusk among native grasses", variant: "full" },
      { src: img("project-amagansett-02.jpg"), alt: "Living space with vaulted ceiling and ocean light", variant: "split-left" },
      { src: img("project-amagansett-03.jpg"), alt: "Outdoor terrace with low stone wall and dune grasses", variant: "split-right" },
      { src: img("project-amagansett-04.jpg"), alt: "Detail of weathering cedar cladding", variant: "detail" },
      { src: img("project-amagansett-05.jpg"), alt: "Bedroom with linen textures and morning light", variant: "tall" },
      { src: img("project-amagansett-06.jpg"), alt: "Long pool terrace toward the ocean", variant: "wide" },
    ],
    notes: [
      "Untreated cedar and weathering details were chosen to silver in place; the house will look better in ten years than the day it was finished.",
      "Interior walls are lime-washed plaster, softening the strong East End light without dimming it.",
      "Rooms are arranged as enfilades along the dune line, so the ocean appears and disappears down the sequence.",
    ],
  },
  {
    slug: "wythe-residence",
    index: "05",
    title: "Wythe Residence",
    location: "Williamsburg, Brooklyn",
    neighborhood: "Williamsburg",
    scope: "Residential Interior",
    year: "2023",
    size: "3,600 sq ft",
    card: { src: img("project-wythe-01.jpg"), alt: "Brooklyn residence interior with warm minimal living space", ratio: "portrait" },
    intro:
      "A warehouse conversion in Williamsburg — thick timber structure, deep window reveals, and interiors built from a few honest materials.",
    gallery: [
      { src: img("project-wythe-01.jpg"), alt: "Living space with heavy timber beams and deep reveals", variant: "full" },
      { src: img("project-wythe-02.jpg"), alt: "Kitchen in smoked oak with stone counters", variant: "split-left" },
      { src: img("project-wythe-03.jpg"), alt: "Bathroom in tadelakt with brass fittings", variant: "split-right" },
      { src: img("project-wythe-04.jpg"), alt: "Detail of timber column and beam junction", variant: "detail" },
      { src: img("project-wythe-05.jpg"), alt: "Bedroom with blackout linen drapery", variant: "tall" },
      { src: img("project-wythe-06.jpg"), alt: "Corner living space at dusk with city view", variant: "wide" },
    ],
    notes: [
      "The existing heavy-timber structure was exposed and left unfinished — the ceiling height and columns set every other decision.",
      "Kitchens and baths are tadelakt and smoked oak; two materials, detailed to meet without trim.",
      "Deep window reveals act as sills, seats, and shelving — architecture doing the work furniture usually does.",
    ],
  },
  {
    slug: "hudson-house",
    index: "06",
    title: "Hudson House",
    location: "Hudson Valley, New York",
    neighborhood: "Hudson Valley",
    scope: "Architecture + Interior Design",
    year: "2023",
    size: "5,900 sq ft",
    card: { src: img("project-hudson-01.jpg"), alt: "Hudson Valley glass and timber house at dusk", ratio: "wide" },
    intro:
      "A weekend house above the Hudson — glass, blackened timber, and fieldstone arranged around a single long view of the river valley.",
    gallery: [
      { src: img("project-hudson-01.jpg"), alt: "Glass and timber house above the Hudson at dusk", variant: "full" },
      { src: img("project-hudson-02.jpg"), alt: "Living pavilion with fieldstone fireplace", variant: "split-left" },
      { src: img("project-hudson-03.jpg"), alt: "Glazed corner with valley view and reading chair", variant: "split-right" },
      { src: img("project-hudson-04.jpg"), alt: "Detail of blackened timber and glass junction", variant: "detail" },
      { src: img("project-hudson-05.jpg"), alt: "Guest bedroom with woven textures", variant: "tall" },
      { src: img("project-hudson-06.jpg"), alt: "Terrace at dusk with valley beyond", variant: "wide" },
    ],
    notes: [
      "Blackened timber and fieldstone anchor the house to its site; glass walls are detailed flush to make the valley the interior's only artwork.",
      "A fieldstone spine wall runs the length of the plan, carrying chimney, flues, and the main fireplace.",
      "Interiors use a single upholstery cloth in undyed linen throughout — rooms recede, the landscape doesn't.",
    ],
  },
];

/** Ordered slugs for prev/next navigation. */
export const projectOrder = projects.map((p) => p.slug);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  return { prev, next };
}

/** Featured project for the homepage: West 11th Townhouse. */
export const featuredProject = getProject("west-11th-townhouse")!;
