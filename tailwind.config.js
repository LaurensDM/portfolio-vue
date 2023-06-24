/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#fffcfa',
      'regular': '#1fbf03',
      'shade': '#22a20b',
      'darkShade': '#237b14',
      'dark': '#204819',
      'darker': '#131c11',
      'black': '#181818',
      'red': '#ff0000',
      'slate': '#ebe8e8',
    },
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
}

