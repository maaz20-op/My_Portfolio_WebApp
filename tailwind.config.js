/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],        // for body text
        heading: ['Playfair Display', 'serif'], // for headings
      },
    },
  },
  plugins: [],
}
