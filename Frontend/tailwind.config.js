
const colors = require('tailwindcss/colors')
export default  {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
 
    },
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      "blue": "#0000ff",
      "black": "#000000",
      "red": "#ff0000",
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'cyan': '#06b6d4',
      'lightgreen': '#033C4B',
      'lightgreen2': '#5db054',
      'lightgreen3': '#d1fae5',
      'darkgreen': '#008480',
      'lightPink': '#D9D9D9',
      'lightPinkDark': '#504E4E',
      "TextBlue":"#37447E",
      "DarkBlue":"#111B47",
      "LightBlue":"#E7ECFF",
      "MediumBlue":"#E7ECFF"
    },
  },
  plugins: [],
}