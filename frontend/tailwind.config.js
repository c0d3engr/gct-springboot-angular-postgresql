/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",       // Scan all HTML/TS files
    "./src/app/**/*.scss",        // Include SCSS files if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}