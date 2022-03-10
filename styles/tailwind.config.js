module.exports = {
  content: ["_site/**/*.html"],
  safelist: [],
  theme: {
    extend: {
      spacing: {
        // 48px --> 152px
        "hero-bottom": "clamp(3rem, 8vw + 1.25rem, 9.5rem)",
        // 32px --> 64px
        "header-bottom": "clamp(2rem, 5vw + 0.5rem, 4rem)",
      },
      fontFamily: {
        serif: ["Bellefair", "serif"],
        sans: ["Barlow", "sans-serif"],
        "sans-cond": ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        "low-dark": "hsl(230, 35%, 7%, 0.95)",
        "low-white": "hsl(0, 0%, 100%, 0.35)",
        primary: "#D0D6F9",
        dark: "#0B0D17",
        gray: "#979797",
        white: "#FFFFFF",
      },
      fontSize: {
        // 80px --> 150px
        "head-1": "clamp(5rem, 11vw + 0.625rem, 9.375rem)",
        // 56px --> 100px
        "head-2": "clamp(3.5rem, 6.9vw + 0.75rem, 6.25rem)",
        // 24px --> 56px
        "head-3": "clamp(1.5rem, 5vw + 0.5rem, 3.5rem)",
        // 16px --> 32px
        "head-4": "clamp(1rem, 2.5vw + 0.1rem, 2rem)",
        // 16px --> 24px
        "head-5": "clamp(1rem, 1.9vw + 0.25rem, 1.5rem)",
        // 15px --> 18px
        body: "clamp(0.9375rem, 0.469vw + 0.75rem, 1.125rem)",
        // 14px --> 16px
        "dest-ctrl": "clamp(0.875rem, 0.31vw + 0.75rem, 1rem)",
        // 10px --> 15px
        "crew-ctrl": "clamp(0.625rem, 0.78vw + 0.3125rem, 0.9375rem)",
        // 16px --> 32px
        "tech-ctrl": "clamp(1rem, 2.5vw + 0.1rem, 2rem)",
      },
      letterSpacing: {
        wide: "0.169em",
      },
      gridTemplateColumns: {
        "nav-desktop": "167px 1fr 167px",
        "tech-desktop": "167px 1fr",
        "nav-mobile": "1fr",
      },
      backgroundImage: {
        "home-mobile": "url('./images/home/background-home-mobile.jpg')",
        "home-tablet": "url('./images/home/background-home-tablet.jpg')",
        "home-desktop": "url('./images/home/background-home-desktop.jpg')",

        "dest-mobile":
          "url('./images/destination/background-destination-mobile.jpg')",
        "dest-tablet":
          "url('./images/destination/background-destination-tablet.jpg')",
        "dest-desktop":
          "url('./images/destination/background-destination-desktop.jpg')",

        "crew-mobile": "url('./images/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('./images/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('./images/crew/background-crew-desktop.jpg')",

        "tech-mobile":
          "url('./images/technology/background-technology-mobile.jpg')",
        "tech-tablet":
          "url('./images/technology/background-technology-tablet.jpg')",
        "tech-desktop":
          "url('./images/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
