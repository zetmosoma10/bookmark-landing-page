/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        soft_Blue: "hsl(231, 69%, 60%)",
        soft_Red: "hsl(0, 94%, 66%)",
        grayish_Blue: "hsl(229, 8%, 60%)",
        dark_Blue: " hsl(229, 31%, 21%)",
      },
    },
  },
  plugins: [],
};
