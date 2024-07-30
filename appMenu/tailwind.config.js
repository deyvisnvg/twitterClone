/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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

