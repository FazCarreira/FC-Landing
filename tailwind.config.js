const { url } = require("inspector");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#993399',
        secondary: '#FFA500',
        info: '#20B1AA'
      },
      fontFamily: {
        main: ['Righteous'],
      },
      fontSize: {
        'xxxs': '.25rem',
        'xxs': '.5rem',
      },
      screens: {
        'xxl': '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
