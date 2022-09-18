/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#0096FF",
        "blue-secondary": "#00D7FF",
        "blue-tertiary": "#72FFFF",
        "purple-accent": "#A500FF",
      },
      screens: {
        '2sm' : '400px',
      }
    },
  },
  plugins: [],
}
