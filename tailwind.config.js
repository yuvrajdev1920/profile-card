/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes: {
        harmonic: {
          '0%, 50%, 100%': { transform: 'translate(0 px, 0px)' },
          '25%': { transform: 'translate(-5%,-5%)' },
          '75%': { transform: 'translate(5%,5%)'},
        }
      },
      animation: {
        harmonic: 'harmonic 6s linear infinite',
        harmonicreverse: 'harmonic 6s linear infinite reverse'
      }
    },
  },
  plugins: [],
}

