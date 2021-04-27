const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['*.html', '*.js'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'midnight-green': '#0F4C5C',
        'spanish-orange': '#E36414',
        'dark-orange': '#FB8B24',
        'ruby-red': '#9A031E',
        'tyrian-purple': '#5F0F40',
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        serif: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['@tailwindcss/forms'],
};
