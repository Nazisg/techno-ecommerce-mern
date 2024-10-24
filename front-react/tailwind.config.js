/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-red": "#ff4a4a",
        "primary-blue": "#2996d8"
      },
      backgroundImage: {
        "bgImg": "url('/common-banner.webp')"
      }
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
}
