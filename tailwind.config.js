/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      teal: "#7DCACA",
      light_teal: "#C0E7E7",
      grey: "#484848",
    },
    extend: {},
    fontFamily: {
      kodchasan: ["kodchasan", "sans-serif"],
      montbold: ["montbold", "sans-serif"],
      montreg: ["montregular", "sans-serif"],
      montsemibold: ["montsemibold", "sans-serif"],
      montmedium: ["montmedium", "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [require("tailwindcss-animated")],
};
