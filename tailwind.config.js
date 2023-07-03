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
        violet600: '#8B5CF6',
        violet600b: '#C4B5FD',
        violet700: '#7C3AED',
        violet700b: '#A78BFA',
        violet800: '#6D28D9',
        violet900: '#5B21B6',
        violet1000: '#4C1D95',
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

