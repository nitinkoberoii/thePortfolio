/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C778DD",
        gray: {
          DEFAULT: "#ABB2BF",
        },
        background: "#232136",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
