/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "390px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },

      colors: {
        menu: "#1B4367",
        greenLight: "#24A681",
        darkGreen: "#06403D",
        main: "#F5F5F5",
        header: "#61C5FD",
        text: "#082E68",
        footer: "rgba(31, 40, 47, 0.92)",
        button: "#51B6FF",
        subMenu: "#0F3855",
      },

      backgroundImage: {
        'scene-grad': 'linear-gradient(#a6d8ff, #fff, #fff)'
      },

      boxShadow: {
        'sun-light': '0 0 50px #fff',
        'sun-dark': '0 0 0 #fff',
      }
    },
  },
  plugins: [],
};