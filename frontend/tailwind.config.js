<<<<<<< HEAD

/* eslint-disable import/no-anonymous-default-export */
=======
<<<<<<< HEAD
>>>>>>> 8c3ad2ea38259debf2b42c4688f7e53a655e2e99
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
<<<<<<< HEAD
=======
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
>>>>>>> 8c3ad2ea38259debf2b42c4688f7e53a655e2e99
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
<<<<<<< HEAD
=======
>>>>>>> 7db94d6db04695acdbaf857f526899f7475d6de0
>>>>>>> 8c3ad2ea38259debf2b42c4688f7e53a655e2e99
  },
  plugins: [],
}