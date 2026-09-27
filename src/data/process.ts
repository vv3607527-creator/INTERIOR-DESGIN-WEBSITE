export type ProcessStage = {
  index: string;
  title: string;
  description: string;
};

export const processStages: ProcessStage[] = [
  {
    index: "01",
    title: "Discovery",
    description:
      "Understanding the property, client, lifestyle, architecture, and ambitions for the project.",
  },
  {
    index: "02",
    title: "Concept",
    description:
      "Establishing spatial direction, materials, atmosphere, and architectural language.",
  },
  {
    index: "03",
    title: "Design Development",
    description:
      "Refining layouts, millwork, lighting, finishes, furniture, and architectural details.",
  },
  {
    index: "04",
    title: "Documentation",
    description:
      "Preparing detailed drawings, specifications, schedules, and construction information.",
  },
  {
    index: "05",
    title: "Construction",
    description:
      "Working closely with contractors, craftspeople, fabricators, and consultants throughout execution.",
  },
  {
    index: "06",
    title: "Installation",
    description:
      "Furniture, artwork, objects, styling, and final project completion.",
  },
];
