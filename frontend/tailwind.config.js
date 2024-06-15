<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
=======
/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blinkCaret: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'rgb(0, 255, 238)' },
        },
      },
      animation: {
        typing: 'typing 3s steps(40, end) forwards',
        blinkCaret: 'blinkCaret 0.75s step-end infinite',
      },
    },
>>>>>>> 7db94d6db04695acdbaf857f526899f7475d6de0
  },
  plugins: [],
}