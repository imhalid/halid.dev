/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkGreen: "#2A523F",
      mediumGreen: "#35845E",
      lightGreen: "#4C9873",
      black: "#000000",
      darkBlack: "#161616",
      mediumBlack: "#222222",
      white: "#FFFFFF",
      lightGray: "#F5F5F5",
    },
  },
  plugins: [],
};
