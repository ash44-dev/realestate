import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#141410",
        foreground: "#F0EFE9",
        accent: {
          DEFAULT: "#EAB308",
          light: "#FDE047",
          dark: "#CA8A04",
        },
        card: "#1E1E1A",
        muted: "#9E9E94",
        border: "#2E2E2A",
        surface: "#0A0A08",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 16px 0 rgba(0,0,0,0.4)",
        "card-hover": "0 8px 32px 0 rgba(0,0,0,0.6)",
        nav: "0 1px 0 0 rgba(0,0,0,0.4)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
