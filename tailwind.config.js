/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
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
        "upload-width": "calc(25% - 9px)",
        "channel-sm": "calc(100vw - 24px)",
        "channel-sm-md": "calc(100vw - 48px)",
        "channel-md-lg": "calc(75vw - 42px)",
        "channel-lg-xl": "calc(80vw - 43.2px)",
        "channel-xl-xxl": "calc(83.33333vw - 58.66667px)",
        "channel-xxl": "1381.33333px",
      },
      height: {
        "note-container-lg": "calc(100% - 48px)",
        "note-container-xl": "calc(100% - 64px)",
      },
      maxWidth: {
        "media-detail-img-xl": "calc(100vw - 208px - var(--interaction-width))",
        "media-detail-img-md": "calc(100vw - 176px - var(--interaction-width))",
      },
      padding: {
        "maincontent-xxl": "282.66667px",
        "maincontent-xl": "calc(-5.33333px + 16.66667vw)",
        "maincontent-lg": "calc(-4.8px + 20vw)",
        "maincontent-md": "calc(-6px + 25vw)",
        upload: "calc(25% - 11px)",
      },
      boxShadow: {
        "menu-list":
          "0 4px 32px 0 rgba(0, 0, 0, 0.08), 0 1px 4px 0 rgba(0, 0, 0, 0.04)",
        "dark-menu-list":
          "0 4px 32px 0 rgba(0, 0, 0, 0.08), 0 1px 4px 0 rgba(0, 0, 0, 0.04),0 0 0 1px hsla(0, 0%, 100%, 0.06) inset",
        "theme-button":
          "0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
        "dark-theme-button":
          "0 2px 8px 0 rgba(0,0,0,0.04),0 1px 2px 0 rgba(0,0,0,0.02),0 0 0 1px hsla(0,0%,100%,0.04) inset",
        "feed-card": "0 0 0 1px var(--color-border)",
        "dark-feed-card": "0 0 0 1px var(--dark-color-border)",
        "note-container":
          "0 8px 64px 0 rgba(0,0,0,0.04),0 1px 4px 0 rgba(0,0,0,0.02)",
      },
    },
  },
  plugins: [],
}
