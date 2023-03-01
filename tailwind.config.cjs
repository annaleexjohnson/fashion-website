/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'model1': "url('./src/assets/photos/model1.jpg')",
        'model2': "url('./src/assets/photos/model2.jpg')",
        'model3': "url('./src/assets/photos/model3.jpg')",
        'model4': "url('./src/assets/photos/model4.jpg')",
        'model5': "url('./src/assets/photos/model5.jpg')",
        'model6': "url('./src/assets/photos/model6.jpg')",
        'landscape1': "url('./src/assets/photos/landscape1.jpg')",
        'landscape2': "url('./src/assets/photos/landscape2.jpg')",
        'landscape3': "url('./src/assets/photos/landscape3.jpg')",
        'landscape4': "url('./src/assets/photos/landscape4.jpg')",
      },


      keyframes: {
        moveTextInfinite: {
          "0%, 100%": { transform: "translateX(-150%)" },
          "50%": { transform: "translateX(10%)" },
        },
        moveTextLinear: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        movePics25: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-25%)" }
        },
      },


      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },


      fontSize: {
        xs: '0.5rem',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '10xl': '6rem' 
      },

      fontWeight: {
        'xbold' : '800'
      }
    }
  },

  plugins: [],
}
