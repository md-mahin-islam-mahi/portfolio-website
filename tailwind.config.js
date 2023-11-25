/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      mainBg: '#142021',
      mainFont: '#57CFD9',
      navBg: '#182627',
    },
    fontFamily: {
      default: 'Inter',
      fancy: 'Koulen'
    }
  },
  
  plugins: [],
}