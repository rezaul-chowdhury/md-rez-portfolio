/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'nav-bar': '#BD9786',
        'section2': '#EDF0F2',
        'skill': '#D9D9D9',
        'project': '#CBD5E1',
        'contact-me': '#DBD8D1',
        'icon-big': '#9B9B9B'
      },
      fontFamily: {
        Tangerine: ["Tangerine", "cursive"],
        Poppins: ["Poppins", "sans-serif"]
      },
      fontLineHeight: {
        'line-height': '3.5rem',
      },
      screens: {
        'mobile-tablet': '900px',
      },
    },
  },
  plugins: [],
}
