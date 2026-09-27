import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { projects } from "@/data/projects";
import { journalEntries } from "@/data/journal";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = ["", "projects/", "studio/", "services/", "journal/", "contact/"].map(
    (route) => ({
      url: `${base}/${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const journalRoutes = journalEntries.map((e) => ({
    url: `${base}/journal/${e.slug}/`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...journalRoutes];
}
