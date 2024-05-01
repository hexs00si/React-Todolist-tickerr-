/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        platinumm: '#EAEAEA',
        periwinkle: '#CBC5EA',
        pomp : '#73628A',
        deift: '#313D5A',
        gunmetal: '#183642'
      }
    },
  },
  plugins: [],
}