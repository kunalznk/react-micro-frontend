/** @type {import('tailwindcss').Config} */
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss, autoprefixer],
}

