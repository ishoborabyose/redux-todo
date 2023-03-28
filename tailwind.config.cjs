/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        box: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
    },
  },
  plugins: [],
};
