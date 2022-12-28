/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      spacing: {
        'custom-mobile-width': '18rem',
        'custom-tablet-width': '21rem',
        'custom-desktop-width': '25rem'
      },
      colors: {
        'nav-bar': '#565656',
        'section1': '#38a3a5',
        'section2': '#a3b18a',
        'skill': '#e5e5e5',
        'project': '#ffffff',
        'contact-me': '#46737e',
        'icon-big': '#a47148',
        'button': '#bc6c25'
      },
      fontFamily: {
        // Tangerine: ["Tangerine", "cursive"],
        OldStandard:['Old Standard TT', 'serif'],
        Poppins: ["Poppins", "sans-serif"]
      },
      fontLineHeight: {
        'line-height': '3.5rem',
      },
      // screens: {
      //   'mobile-tablet': '1000px',
      //   'tablet': '700px'
      // },
    },
  },
  plugins: [],
}
