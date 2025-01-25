/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        'nav':'#DEE2E6',
        'bg':'#F8F9FA',
        'fron':'#E9ECEF',
        'contact':'#6C757D'
        
      }
    },
    fontFamily:{
      signature:['Dancing Script'],
      signature2:['Poppins']
    },
    
  },
  plugins: [],
}

