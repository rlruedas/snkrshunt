/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,css}"],
  theme: {
    extend: {
      keyframes: {
        popout: {
          "0%, 100%": { transform: 'translateX(25em)' }
        }
      },
      animation: {
        popout: "popout 100ms ease in out"
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'LandingPageBG' : "url('/src/assets/png/LandingPageBG.png')",
        'BrandPageBG' : "url('/src/assets/png/BrandBG.jpg')"
      }
    },

  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
}
