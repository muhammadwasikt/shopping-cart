/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#f0f0f0",
        secondary: "#3333",
        accent: "#f2f0f1",
        textColor: "#333",
      },
    },
    letterSpacing: {
      tighte: "-0.03em",
      tightest: '-.09em',
      wides: '1em',
    }
  },
  plugins: [
    daisyui
  ],
};