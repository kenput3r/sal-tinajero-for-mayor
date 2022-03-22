const formsPlugin = require('@tailwindcss/forms')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      d: '768px', // => @media (min-width: 768px) { ... }
      'x-down': { max: '375px' },
      'under-md': { max: '767px' },
      phones: { max: '500px' },
      notPhones: '500px',
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
