/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors: {
        main: "#000",
        twitter: "rgb(22, 24, 28)",
        twitter_btn: "rgb(29, 155, 240)",
      }
    },
  },
  plugins: [],
}

