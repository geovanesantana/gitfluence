/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        light: "#fffef1",
        gray: "#c1c0b4",
        black: "#222326",
        "black-500": "#1c1d22",
        "black-600": "#232021",
        "black-700": "#262321",
        slate: "#17181d",
        zinc: "#232323",
        amber: "#ffac64",
        "amber-400": "#FFB677",
        "amber-600": "#c18d35",
        "amber-700": "#A07731",
        yellow: "#f2b132",
        "yellow-400": "#F4C15F",
      },
      fontFamily: {
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        tiles: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-4em)",
          },
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/bg-pattern.svg')",
        "terminal-pattern":
          "linear-gradient(91.57deg, rgba(250, 190, 101, 0.5) -15.63%, rgba(190, 127, 107, 0.5) 16.07%, rgba(131, 155, 251, 0.5) 108.52%)",
        "radial-gradient":
          "radial-gradient(202.04% 202.04% at 50% 111.22%, rgba(255, 254, 241, 0.2) 0%, rgba(120, 120, 120, 0.2) 23.95%)",
        "feature-pattern":
          "linear-gradient(91.57deg, rgba(250, 190, 101, 0.7) -15.63%, rgba(190, 127, 107, 0.7) 35.95%, rgba(131, 155, 251, 0.7) 108.52%)",
      },
      boxShadow: {
        "3xl": "0 0 60px 3px rgb(0 0 0 / 40%)",
      },
      animation: {
        tiles: "tiles 600ms steps(4) infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
