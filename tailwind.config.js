/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "auth": "url(src/assets/bg-2.svg)"
      }
    },
    opacity: {
      "70": "0.7"
    }
  },
  plugins: [],
}

