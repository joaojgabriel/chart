/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./{index.html,main.js}"],
  theme: {
    screens: {
      desktop: "1440px",
    },
    colors: {
      "soft-red": "hsl(10, 79%, 65%)",
      cyan: "hsl(186, 34%, 60%)",
      "d-brown": "hsl(25, 47%, 15%)",
      "md-brown": "hsl(28, 10%, 53%)",
      cream: "hsl(27, 66%, 92%)",
      "pale-orange": "hsl(33, 100%, 98%)",
    },
    fontFamily: {
      "dm-sans": ["DM Sans", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      regular: 400,
      bold: 700,
    },
    extend: {
      fontSize: {
        base: "18px",
      },
    },
  },
  plugins: [],
};
