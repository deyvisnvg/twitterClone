/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#000",
        twitter: "rgb(22, 24, 28)",
      }
    },
  },
  plugins: [],
}

