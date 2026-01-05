import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neo-minimalist palette inspired by Pantone 2026 Cloud Dancer
        cloud: {
          50: "#FDFCFB",
          100: "#FAF8F6",
          200: "#F5F1ED",
          300: "#EDE7E0",
          400: "#DDD4C9",
          500: "#C9BBA8",
          600: "#A69882",
          700: "#7D6E5C",
          800: "#564C3E",
          900: "#2E2822",
        },
        // Warm accent - muted terracotta
        terra: {
          50: "#FDF8F6",
          100: "#F8EDE8",
          200: "#F0D9D0",
          300: "#E4BFB0",
          400: "#D4A08A",
          500: "#C08060",
          600: "#A66A4C",
          700: "#7D503A",
          800: "#543728",
          900: "#2B1C14",
        },
        // Sage green for balance
        sage: {
          50: "#F7F9F7",
          100: "#EDF2ED",
          200: "#DCE5DB",
          300: "#C5D4C3",
          400: "#A7BEA4",
          500: "#86A382",
          600: "#6B8567",
          700: "#52664F",
          800: "#394639",
          900: "#212723",
        },
        // Deep contrast
        ink: {
          50: "#F7F7F7",
          100: "#E3E3E3",
          200: "#C8C8C8",
          300: "#A4A4A4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#3D3D3D",
          800: "#242424",
          900: "#121212",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "clamp(4rem, 12vw, 10rem)",
        "section-sm": "clamp(2rem, 6vw, 5rem)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-warm": "linear-gradient(135deg, var(--tw-gradient-stops))",
        "noise": "url('/images/noise.png')",
      },
    },
  },
  plugins: [],
};

export default config;
