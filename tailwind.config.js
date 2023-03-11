/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'searchbarPC': '500px',
        'movieItemPC': '420px',
        'moviePagePC': '800px',
      },
      height: {
        'moviePagePC': '600px'
      }
    },
  },
  plugins: [],
}
