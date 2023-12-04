/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "'Inter', sans-serif;",
        PTsans: "'PT Sans', sans-serif",
      },
      colors: {
        LPurple: "#9A6CF0",
        DPurple: "#350B95",
        LGold: "#EDDD4C",
        CWhite: "#FDFFFA",
      },
    },
  },
  plugins: [],
};
