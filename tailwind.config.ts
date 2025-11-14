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
        cloud: {
          50: "#fbfbf8",
          100: "#f3f1ea",
          200: "#e4decd",
          300: "#d1c7ab",
          400: "#bda987",
          500: "#a78968",
          600: "#886d4f",
          700: "#6b553d",
          800: "#4a3b2b",
          900: "#2d241a",
        },
        ink: {
          50: "#f4f6fb",
          100: "#e4e9f5",
          200: "#cdd6e7",
          300: "#aab9d4",
          400: "#7f97bd",
          500: "#5a76a5",
          600: "#425a86",
          700: "#2f4167",
          800: "#1e2c49",
          900: "#111b30",
        },
        bloom: {
          50: "#fff7f8",
          100: "#ffe9ee",
          200: "#fecfdc",
          300: "#fba9c3",
          400: "#f378a2",
          500: "#e14e87",
          600: "#c1316e",
          700: "#9a2357",
          800: "#6b183d",
          900: "#3f0c24",
        },
        tide: {
          50: "#f1fbfc",
          100: "#d4f3f4",
          200: "#a7e3e7",
          300: "#74ccd5",
          400: "#44afbe",
          500: "#2b92a2",
          600: "#217383",
          700: "#1c5b69",
          800: "#174653",
          900: "#0f2f39",
        },
        amber: {
          50: "#fff5ec",
          100: "#ffe3c8",
          200: "#ffc794",
          300: "#ffa35a",
          400: "#ff8833",
          500: "#f96b0a",
          600: "#d75206",
          700: "#b33d09",
          800: "#7b2709",
          900: "#441505",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Playfair Display", "serif"],
      },
      backgroundImage: {
        "haze-field":
          "radial-gradient(circle at 20% 20%, rgba(91,120,167,0.18), transparent 55%), radial-gradient(circle at 80% 0%, rgba(244,161,169,0.22), transparent 52%)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
        "6xl": "3.5rem",
      },
      boxShadow: {
        float: "0 20px 50px rgba(17, 27, 48, 0.12)",
        outline: "inset 0 0 0 1px rgba(17, 27, 48, 0.08)",
        soft: "0 12px 36px rgba(17, 27, 48, 0.1)",
      },
      spacing: {
        18: "4.5rem",
        28: "7rem",
      },
      letterSpacing: {
        mega: ".4em",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
