/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#303030",
        main: "#776010",
        yellow: "#FEDC5C",
        btn: "#DDC1A7",
        text: "#4E4E4E",
        secondarybg: "#D3D2D2",
      },
      fontFamily: {
        oswald: ["Oswald", "cursive"],
      },
      screens: {
        'xs': '480px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};
