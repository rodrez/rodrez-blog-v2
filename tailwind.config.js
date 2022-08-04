const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,jsx,ts,tsx}',
    './src/lib/**/*.{js,jsx,ts,tsx}',
    './src/data/**/*.{md,mdx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        darkMode: ['darkmode-off', 'sans-serif'],
        adventor: ['adventor', 'sans-serif'],
        'adventor-bold': ['adventor-bold', 'sans-serif'],
        'adventor-italic': ['adventor-italic', 'sans-serif'],
        'adventor-italic-bold': ['adventor-italic-bold', 'sans-serif'],
        halyard: ['halyard-display', 'sans-serif'],
        sriracha: ['Sriracha', 'cursive'],
        'press-start': ['"Press Start 2P"', 'cursive'],
        display: ['Pally', 'Comic Sans MS', 'sans-serif'],
        body: ['Pally', 'Comic Sans MS', 'sans-serif'],
      },
      colors: {
        primary: colors.amber,
        background: '#2C2450',
        accent: '#FFE161',
        'kinda-white': '#F7F7F7',
        'secondary-accent': '#9DD7A7',
        'dark-gray': '#393A6A',
        'dark-green': '#1BF74A',
        'light-green': '#5AF97D',
        'dark-red': '#EB5654',
        'dark-blue': '#1B59F7',
        'dark-pink': '#F71BC7',
        'r-purple': '#6b2cf5',
        'dark-yellow': '#F7B91B',
        'dark-background': '#14213D',
        'dark-container': '#131B30',
        'dark-input': '#1E2A43',
        'dark-cover': '#28374A',
        code: 'rgb(199, 146, 234)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
