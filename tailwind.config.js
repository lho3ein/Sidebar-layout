/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        banafsh: "rgb(67, 56, 202)", // text-indigo-700
      },
      spacing: {
        22: "5.5rem",
      },
      fontFamily: {
        Vazir: ["Vazirmatn"],
        Inter: ["Inter, sans-serif"],
        InterVar: ["InterVariable, sans-serif;"],
      },
    },
  },
  plugins: [],
};
