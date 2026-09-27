# Harrison & Vale — Interior Architecture & Design

A static, editorial portfolio website for a New York interior architecture studio.
Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide.

## Quick start

```bash
npm install
npm run dev        # local development at http://localhost:3000
npm run build      # production build → static /out directory
npm run start      # serve /out locally (npx serve out)
```

The production build generates a fully static `/out` folder — deployable as-is to
Netlify, Vercel (static), Cloudflare Pages, GitHub Pages, S3, or any static host.
No Node.js server is required after deployment.

## Content editing — where things live

| What | File |
|---|---|
| **All business info** (name, address, phone, email, socials, nav, press) | `src/config/site.config.ts` |
| **Projects** (six case studies: copy, images, notes, metadata) | `src/data/projects.ts` |
| **Journal entries** (three articles with full text) | `src/data/journal.ts` |
| Services list | `src/data/services.ts` |
| Design process stages | `src/data/process.ts` |
| Client testimonials | `src/data/testimonials.ts` |

Add a project by appending an entry to `src/data/projects.ts` and dropping its
images into `public/images/` — routes, sitemap, and prev/next navigation update
automatically (Next pre-renders from the data array).

## Photography

Curated Unsplash-licensed photos bundled in `public/images/` (21 MB).
To replace: keep the same filenames, or update the paths in the data files.
`scripts/fetch-images.sh` documents the original source of every image.

## Typography

Self-hosted via `next/font/local` (no external CDN):

- **Instrument Serif** (regular + italic) — display serif for headlines, in the
  sharp high-contrast editorial spirit of Zodiak
- **Instrument Sans** (regular, medium) — navigation, labels, body

woff2 files live in `src/fonts/`. Replace them and update `src/app/layout.tsx`
to change typefaces. `scripts/fetch-fonts.sh` shows the original sources.

## Design system

- Palette tokens in `tailwind.config.ts`: ivory `#FAF8F3`, cream `#F1ECE2`,
  sand `#E3DCCC`, taupe, warm-gray, charcoal `#2A2824`, ink `#181713`
- Fluid display type via `text-display`, `text-h1`–`text-h3`
- Motion primitives in `src/components/motion/` — `Reveal`, `AnimatedHeading`,
  `ImageReveal` (curtain reveal + parallax), `ParallaxImage`, `DividerLine`
- All motion honors `prefers-reduced-motion`

## SEO

Per-route metadata (titles, descriptions, canonicals, Open Graph) via `generateMetadata`,
`ProfessionalService` JSON-LD in `src/lib/schema.ts`, `sitemap.xml` and `robots.txt`
generated at build. Update `siteConfig.url` before deploying to production.
