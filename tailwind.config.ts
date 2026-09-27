import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F3",
        cream: "#F1ECE2",
        sand: "#E3DCCC",
        taupe: "#A39A8B",
        stone: { 200: "#D8D2C6", 500: "#8D857A", 600: "#6B6459" },
        "warm-gray": "#4A463F",
        charcoal: "#2A2824",
        ink: "#181713",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        display: "clamp(2.75rem, 1rem + 7.5vw, 8.5rem)",
        h1: "clamp(2.25rem, 1rem + 4.5vw, 5.5rem)",
        h2: "clamp(1.75rem, 1rem + 3vw, 3.75rem)",
        h3: "clamp(1.375rem, 1rem + 1.5vw, 2.25rem)",
        body: "clamp(1rem, 0.96rem + 0.25vw, 1.125rem)",
      },
      letterSpacing: {
        label: "0.18em",
        wide2: "0.08em",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.16, 1, 0.3, 1)",
        soft: "cubic-bezier(0.33, 1, 0.68, 1)",
      },
      transitionDuration: { 700: "700ms", 900: "900ms", 1200: "1200ms" },
    },
  },
  plugins: [],
};

export default tailwindConfig;
