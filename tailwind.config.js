/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: "#fa1239",
        dimgray: "#666",
        lightseagreen: "#1cb098",
        lightcoral: "rgba(253, 146, 164, 0.3)",
        gray: "rgba(255, 255, 255, 0.79)",
      },
      fontFamily: {
        figtree: "Figtree",
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
