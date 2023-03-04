/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        snzblack: {
          primary: "#020202",
          secondary: "#111111",
        },
        snzcream: {
          primary: "#D8CABD",
          secondary: "#B9ADA3",
        },
      },
    },
    fontFamily: {
      editorial: ["Editorial", "sans-serif"],
      montreal: ["Montreal", "sans-serif"],
    },
  },
  plugins: [],
};
