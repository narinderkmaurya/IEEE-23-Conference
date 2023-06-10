/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}","./node_modules/flowbite/**/*.js"],
  darkMode: 'media',
  screens:{
    sm: '480px',
    md: '768px',
    lg: '976px',
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
