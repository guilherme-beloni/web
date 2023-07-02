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
        zinc: '#18181B',
        zincb: '#070808',
        violet700: '#7C3AED'


      },

      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      }
  },
  plugins: [],
}

