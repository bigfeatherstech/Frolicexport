/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        "gold-light": "#E8D9A0",
        pink: "#E8B4B8",
        "pink-light": "#F5E1E2",
        ivory: "#F9F6F0",
        beige: "#F5F1E8",
        dark: "#3C3C3C",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      transitionProperty: {
        all: "all",
      },
      transitionDuration: {
        300: "300ms",
      },
    },
  },
  plugins: [],
}
