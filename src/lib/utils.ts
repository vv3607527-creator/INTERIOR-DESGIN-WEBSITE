export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Build a /images path from a filename in public/images. */
export function img(name: string): string {
  return `/images/${name}`;
}

export type MailtoPayload = {
  to: string;
  subject: string;
  fields: Array<{ label: string; value: string }>;
};

/** Build a formatted mailto: URL with a readable body. */
export function buildMailto({ to, subject, fields }: MailtoPayload): string {
  const body = fields
    .filter((f) => f.value && f.value.trim() !== "")
    .map((f) => `${f.label}: ${f.value.trim()}`)
    .join("\n");
  const fullBody = `New project enquiry from the Harrison & Vale website.\n\n${body}\n\n— Sent from harrisonandvale.com`;
  return `mailto:${to}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(fullBody)}`;
}

/** Width/height pairs for consistent ratios. */
export const ratios = {
  "3/4": { w: 1200, h: 1600 },
  "4/5": { w: 1400, h: 1750 },
  "1/1": { w: 1400, h: 1400 },
  "5/4": { w: 1750, h: 1400 },
  "4/3": { w: 1600, h: 1200 },
  "3/2": { w: 1800, h: 1200 },
  "16/9": { w: 1920, h: 1080 },
  "21/9": { w: 2100, h: 900 },
} as const;

export type Ratio = keyof typeof ratios;

export function ratioDims(ratio: Ratio) {
  return ratios[ratio];
}
