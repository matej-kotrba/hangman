/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        reflectionEffect:
          "linear-gradient(to right, transparent, #ffffffb5, transparent)",
      },
    },
  },
  plugins: [],
};
