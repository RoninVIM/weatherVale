/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-blue': '#0B121E',
        'input-color':'#202B3B',
        'menu-color':'#202B3B'
      },
      height: {
        '600': '600px',
      },
    },
  },
  plugins: [],
}
