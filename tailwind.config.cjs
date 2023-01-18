/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'roboto-condensed': ['Roboto Condensed', 'sans-serif']
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: 'translate(0, 10%)' },
          "100%": { opacity: 1, transform: 'translate(0, 0)' }
        }
      },
      variants: {
        animation: ["motion-safe"]
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
