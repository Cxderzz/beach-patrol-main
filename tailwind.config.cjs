/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      text: "#071c0e",
      textdark: "#ffffff",
      background: "#ffffff",
      primary: "#46ceb5",
      secondary: "#b2d9eb",
      accent: "#2c7fa5",
    },

    extend: {
      fontFamily: {
        rowdies: ["Rowdies", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
