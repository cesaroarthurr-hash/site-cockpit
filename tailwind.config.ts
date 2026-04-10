import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-green": "#8DC63F",
        "brand-green-dark": "#6fa32e",
        "brand-green-light": "#a8d660",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(141,198,63,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(141,198,63,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
    },
  },
  plugins: [],
};
export default config;
