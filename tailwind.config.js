/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#F51010",
      },
      backgroundImage: {
        // landige pages start
        banner: "url('./assets/images/bg_banner.png')",
      },
      screens: {
        'max-xs': {'max': '480px'},
        'max-sm': {'max': '640px'},
        'max-md': {'max': '768px'},
        'max-lg': {'max': '1024px'},
        'max-xl': {'max': '1280px'},
      },
    },
  },
  plugins: [],
};
