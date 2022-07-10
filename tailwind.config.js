/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    keyframes: {
      "text-shimmer": {
        from: { backgroundPosition: "0 0" },
        to: { backgroundPosition: "-200% 0" },
      },
    },
    animation: {
      "text-shimmer": "text-shimmer 2.5s ease-out infinite alternate",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
