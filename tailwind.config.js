/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "'Inter', sans-serif;",
        PTsans: "'PT Sans', sans-serif",
        NotoSans: "'Noto Sans KR', sans-serif",
        Tektur: "'Tektur', sans-serif",
      },
      colors: {
        LCyan: "#2FB2AC",
        DPurple: "#201C3C",
        CWhite: "#FFFCFB",
      },
    },
  },
  plugins: [],
};
