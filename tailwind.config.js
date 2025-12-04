/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        great: ["Great Vibes", "cursive"], // Couple names only (use sparingly)
        playfair: ["Playfair Display", "serif"], // Section headings, quotes
        manrope: ["Manrope", "sans"], // Body text, buttons, paragraphs
      },
      colors: {
        primary: "#6D28D9", // Main buttons, important highlights, primary CTAs
        secondary: "#8B5CF6", // Secondary buttons, hover states, supporting elements
        accent: "#F59E0B", // Accent buttons, special highlights, gold details
        light: "#F5F3FF", // Main background, card backgrounds
        dark: "#4C1D95", // Headings, important text, dark elements
      },
    },
  },
  plugins: [],
};
