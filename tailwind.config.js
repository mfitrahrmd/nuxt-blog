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
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      rose: colors.rose,
    },
  },
};
