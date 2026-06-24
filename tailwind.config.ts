import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f3f9e8",
          100: "#e4f1cb",
          200: "#cce79b",
          300: "#a8d660",
          400: "#8DC63F",
          500: "#74ab2a",
          600: "#5a8a1f",
          700: "#456a1a",
          800: "#39551a",
          900: "#30481b",
        },
        "brand-green": "#8DC63F",
        "brand-green-dark": "#6fa32e",
        "brand-green-light": "#a8d660",
        // Acteur accents (repris de la plaquette)
        aux: "#8DC63F",
        manager: "#3B82F6",
        famille: "#8B5CF6",
        pro: "#F59E0B",
        // Sections sombres (façon speakli, en vert profond)
        night: {
          DEFAULT: "#0B1F14",
          50: "#103021",
          100: "#0E2719",
          900: "#06140C",
        },
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(141,198,63,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(141,198,63,0.06) 1px, transparent 1px)",
        "night-grid":
          "linear-gradient(to right, rgba(168,214,96,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,214,96,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "marquee-rev": "marquee-rev 50s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        wave: "wave 1.1s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
