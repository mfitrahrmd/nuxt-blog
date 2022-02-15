const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{js,jsx,ts,tsx,vue}",
    "./layouts/**/*.{js,jsx,ts,tsx,vue}",
    "./pages/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#7E21D4",
        50: "#D7B9F4",
        100: "#CEA7F1",
        200: "#BA84EC",
        300: "#A660E6",
        400: "#923DE1",
        500: "#7E21D4",
        600: "#6119A3",
        700: "#441273",
        800: "#270A42",
        900: "#0B0312",
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      emerald: colors.emerald,
      indigo: colors.indigo,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      rose: colors.rose,
      pink: colors.pink,
    },
    extend: {
      aspectRatio: {
        "1/1": "1 / 1",
        "4/3": "4 / 3",
        "16/9": "16 / 9",
      },
      spacing: {
        header: "58px",
        "header-2": "132px",
      },
      width: {
        "site-width": "1280px",
      },
      maxWidth: {
        "site-width": "1280px",
      },
      minHeight: {
        "body-height": "calc(100vh - 58px)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
