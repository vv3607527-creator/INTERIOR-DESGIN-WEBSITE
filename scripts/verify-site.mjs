import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const requiredRoutes = [
  "index.html",
  "contact/index.html",
  "projects/index.html",
  "journal/index.html",
  "sitemap.xml",
  "robots.txt",
];
const requiredAssets = [
  "images/hero-home.jpg",
  "images/og-image.jpg",
  "icon.svg",
];
const missing = [...requiredRoutes, ...requiredAssets]
  .filter((relative) => !existsSync(join(root, "out", relative)));
if (missing.length) {
  console.error(`Missing generated output: ${missing.join(", ")}`);
  process.exit(1);
}
const html = readFileSync(join(root, "out", "contact/index.html"), "utf8");
if (!html.includes("Start a Conversation") || !html.includes("Enquiry form")) {
  console.error("Contact route is missing expected accessible content");
  process.exit(1);
}
const formSource = readFileSync(join(root, "src/components/shared/ContactForm.tsx"), "utf8");
if (!formSource.includes("window.location.assign(mailto)")) {
  console.error("Contact form does not invoke its generated mailto action");
  process.exit(1);
}
console.log(`Verified ${requiredRoutes.length} routes, ${requiredAssets.length} assets, and contact submission wiring.`);
