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
        yellow: {
          brand: "#FFF952",
        },
        dark: "#38383B",
        "medium-gray": "#52524C",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
      },
      fontSize: {
        h1: ["2.5rem", { lineHeight: "1.175", letterSpacing: "0.02em", fontWeight: "300" }],
        h2: ["1.7rem", { lineHeight: "1.25", letterSpacing: "0.02em", fontWeight: "300" }],
        h3: ["1.5rem", { lineHeight: "1.225", letterSpacing: "0.02em", fontWeight: "300" }],
        h4: ["1.3rem", { lineHeight: "1.25", letterSpacing: "0.02em", fontWeight: "300" }],
        large: ["1.1rem", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "300" }],
        normal: ["1rem", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "300" }],
        small: ["0.9rem", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "300" }],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
