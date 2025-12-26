/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Ye ensure karta hai ki 'dark' class lagne par theme badle
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Yahan aap apne ICT dashboard ke custom colors bhi daal sakte hain
    },
  },
  plugins: [],
}