/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    fontSize:{
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      "2xl": "1.75rem",
      "7xl": ["5.313rem", {
        lineHeight: '4rem',

      }]
    },
    extend: {
      fontFamily: {
        cormorant: ["Cormorant Garamond", 'serif'],
      },
      letterSpacing: {
        widest: "0.5rem"
      },
      borderRadius:{
        full: "100%"
      }
      
    },
  },
  plugins: [],
}

