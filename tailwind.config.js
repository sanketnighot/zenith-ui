/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-bg": "#0E0F18",
        "purple-btn": "#59219D",
        "lite-purple-btn": "#AC72FA",
        "purple-card": "#AC69FF29",
        "black-card": "#151723",
        "sidebar-bg": "#000614",
        "lite-sidebar-bg": "#AC69FF",
        "extra-lite-purple": "#B77DFF",
        "red-btn": "#E01B3C",
        "green-btn": "#1ECC89",
        "lite-black-btn": "#00061461",
        "primary-border": "#787878",
        "lite-black": "#141724",
        "option-black": "#30313D",
        "stake-purple": "#AC69FFCC",
        "mute-text": "#A6AEEE",
        "index-bg": "#0B0B0F",
        "index-hero-p": "#898CA9",
        "index-card": "#1A1B23",
      },
    },
  },
  plugins: [],
}
