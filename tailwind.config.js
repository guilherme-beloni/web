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
        violet700: '#7C3AED',
        zinc400: '#4F4F4F',
        green600: '#00FF7F',
        green500: '#7FFFD4'


      },

      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))'
      }
  },
  plugins: [],
}

