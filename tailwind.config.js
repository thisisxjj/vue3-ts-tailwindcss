/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '696px',
      md: '960px',
      lg: '1192px',
      xl: '1424px',
      xxl: '1728px',
    },
    extend: {
      width: {
        'input-xl': 'calc(-42.66667px + 33.33333vw)',
        'input-lg': 'calc(-33.6px + 40vw)',
        'input-md': 'calc(-36px + 50vw)',
        'input-sm': 'calc(-40px + 66.66667vw)',
      }
    },
  },
  plugins: [],
}

