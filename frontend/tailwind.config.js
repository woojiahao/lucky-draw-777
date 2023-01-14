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
      },
      keyframes: {
        'auto-resizing': {
          '0%': { transform: 'scale(0.2)' },
          '100%': { transform: 'scale(1)' }
        },
        'flashing': {
          '0%': { color: '#000' },
          '10%': { color: '#ff0000' },
          '20%': { color: '#00ff00' },
          '50%': { color: '#00ffff' },
          '80%': { color: '#ff0ff0' },
          '90%': { color: '#f00ff0' },
          '100%': { color: '#00fff0' },
        },
      },
      animation: {
        'auto-resizing': 'auto-resizing 2s ease-in-out infinite',
        'flashing': 'flashing 2s ease-in-out infinite',
      },
      backgroundImage: {
        'money': 'url("/src/bg.gif")'
      }
    },
  },
  plugins: [],
}
