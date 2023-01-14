/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Indie Flower'],
      },
      fontSize: {
        base: '18px',
        'mxl': '5rem'
      }
    },
  },
  plugins: [],
}
