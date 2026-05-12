/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0D0B0C',
        'brand-rose': '#B88A7A',
        'brand-nude': '#E7C1B2',
        'brand-white': '#F7F3F1'
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
