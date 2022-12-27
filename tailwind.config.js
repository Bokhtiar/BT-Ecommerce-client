/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
     container: {
      center: true,
      padding: "1rem"
     },
    extend: {
      fontFamily: {
        nunito : " 'Nunito', sans-serif  ",
        quicksand : " 'Quicksand', sans-serif ",
        roboto : "  'Roboto', sans-serif "
      },
      colors: {
        'primary' : "#FD3057",
        'secondary' : "#324324"
      }
    },
  },
  plugins: [],
}
