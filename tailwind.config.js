/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkcyan: "rgba(9, 152, 152, 0.01)",
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.01)",
          "200": "rgba(0, 0, 0, 0.01)",
        },
        gold: "#ffdd07",
        black: "#000",
        teal: "#008181",
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        "inknut-antiqua": "'Inknut Antiqua'",
        inconsolata: "Inconsolata",
        inherit: "inherit",
        "im-fell-english": "'IM FELL English'",
      },
      borderRadius: {
        "3xs": "10px",
        "31xl": "50px",
        xl: "20px",
      },
    },
    fontSize: {
      mid: "17px",
      lg: "18px",
      base: "16px",
      "11xl": "30px",
      xl: "20px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
