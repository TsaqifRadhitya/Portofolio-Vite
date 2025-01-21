/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
      },
    },
  },
  plugins: [daisyui],
}


