/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {},
      colors: {
        background: '#09090A',
        zinc: '#1C1C1C',
        zincb: '#363636'

      },

      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      }
  },
  plugins: [],
}

