/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,css}"],
  theme: {
    extend: {
      keyframes: {
        popout: {
          "0%, 100%": { transform: "translateX(25em)" },
        },
      },
      animation: {
        popout: "popout 100ms ease in out",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Vonique: ["Vonique", "san-serif"],
        BoiledSnakes: ["BoiledSnakes"],
        Hotlady: ["Hotlady"],
      },
      backgroundImage: {
        LandingPageBG: "url('/src/assets/webp/LandingPageBG.webp')",
        BrandPageBG: "url('/src/assets/webp/BrandBG.webp')",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
