/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      colors:{
        'primary': '#E58411', 
        'secondary': '#1E1E1E', 
        'secondary-bg': '#F7F7F7', 
      },
      fontFamily: {
        'primary': ["Poppins", 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
      
    },
  },
  plugins: [],
}

