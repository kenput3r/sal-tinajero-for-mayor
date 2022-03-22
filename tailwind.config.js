const formsPlugin = require('@tailwindcss/forms')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      d: '768px', // => @media (min-width: 768px) { ... }
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        'st-yellow': 'var(--st-yellow)',
      }
    },
  },
  plugins: [formsPlugin],
}
