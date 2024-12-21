/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('src/assets/images/hero_mobile.png')",
        "hero-desktop": "url('src/assets/images/hero_desktop.png')",
      },
      backgroundColor: {
        "light-pink": "#FFF7E2",
      },
      colors: {
        "light-green": "#3A643B",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
