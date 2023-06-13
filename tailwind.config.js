/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}","./node_modules/flowbite/**/*.js"],
  darkMode: 'media',
  screens:{
    sm: '480px',
    md: '769px',
    lg: '1024px',
    xl: '1440px',
  },
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
        Abril: ["Abril Fatface", "cursive"],
        Lobster: ["Lobster", "cursive"],
        questrial: ["Questrial", "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
