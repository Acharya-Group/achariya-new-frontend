/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",   
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#261b7d",   
        secondary: "#7a0706", 
      },
       boxShadow: {
        'right': '10px 0 15px -3px rgba(0,0,0,0.1)',
      },
       borderColor: {
        primary: "#261b7d",
      },
    },
  },
  plugins: [],
};
