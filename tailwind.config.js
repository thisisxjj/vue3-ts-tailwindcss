/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "696px",
      md: "960px",
      lg: "1192px",
      xl: "1424px",
      xxl: "1728px",
    },
    extend: {
      width: {
        "input-xl": "calc(-42.66667px + 33.33333vw)",
        "input-lg": "calc(-33.6px + 40vw)",
        "input-md": "calc(-36px + 50vw)",
        "input-sm": "calc(-40px + 66.66667vw)",
        "sidebar-xl": "calc(-21.33333px + 16.66667vw)",
        "sidebar-lg": "calc(-16.8px + 20vw)",
        "sidebar-md": "calc(-18px + 25vw)",
      },
      padding: {
        "maincontent-xxl": "282.66667px",
        "maincontent-xl": "calc(-5.33333px + 16.66667vw)",
        "maincontent-lg": "calc(-4.8px + 20vw)",
        "maincontent-md": "calc(-6px + 25vw)",
      },
      boxShadow: {
        "menu-list":
          "0 4px 32px 0 rgba(0, 0, 0, 0.08), 0 1px 4px 0 rgba(0, 0, 0, 0.04)",
        "dark-menu-list":
          "0 4px 32px 0 rgba(0, 0, 0, 0.08), 0 1px 4px 0 rgba(0, 0, 0, 0.04),0 0 0 1px hsla(0, 0%, 100%, 0.06) inset",
      },
    },
  },
  plugins: [],
}
