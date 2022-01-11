module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      tablet: "992px",
      // => @media (min-width: 992px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
    },
    colors: {
      dark: "#000000",
    },
    fontFamily: {
      "ibm-plex": ["IBM Plex Serif", "serif"],
      inter: ["Inter", "serif"],
    },
    textColor: {
      primary: "#00A85A",
      gray: "#18191F",
      dark: "#0B0D17",
      white: "#ffffff",
    },
    extend: {
      colors: {
        primary: "#00A85A",
        gray: "#18191F",
        dark: "#0B0D17",
        white: "#ffffff",
      },
      fontSize: {
        xxs: ["1.4rem", "2.0rem"],
        xs: ["1.6rem", "2.6rem"],
        sm: ["1.8rem", "3.2rem"],
        base: ["2.4rem", "3.4rem"],
        lg: ["3.2rem", "4rem"],
        xl: ["4rem", "5rem"],
        "2xl": ["4.8rem", "6rem"],
        "3xl": ["6.4rem", "7.4rem"],
      },
      boxShadow: {
        sm: "0px 8px 24px #021d2e14",
      },
      borderRadius: {
        base: "1.2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
