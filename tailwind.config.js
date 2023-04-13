/** @type {import('tailwindcss').Config} */
export default { 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white": '#FFFFFF',
      "navy-transparent": "rgba(22, 18, 33, 0.8)",
      "navy": "#161221",
      "greenlight": "#2BD984",
      "turquise": "#3CF4C8"
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

