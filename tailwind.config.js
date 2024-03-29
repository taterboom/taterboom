module.exports = {
  content: ["./{app,pages,components}/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", 'html[class~="dark"]'],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      brand: "#1661AB",
      word: {
        dark: "#06132E",
        DEFAULT: "#06132E",
        light: "#f3f4f6",
      },
      button: "#E6F4F1",
      white: "#FFFEF8",
      black: "#000000",
      gray: "#999",
    },
  },
  plugins: [],
}
