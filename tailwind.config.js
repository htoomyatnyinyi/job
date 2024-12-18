// /** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    // extend: {
    //   fontFamily: {
    //     sans: ["Roboto", "sans-serif"],
    //     serif: ["Georgia", "serif"],
    //     mono: ["Menlo", "Monaco", "Consolas", "Courier New", "monospace"],
    //   },
    // },
  },
  plugins: [scrollbar],
  // plugins: [require("@tailwindcss/forms"), require("tailwindcss-filters")],
  // plugins: [require("tailwind-scrollbar-hide")],
};
