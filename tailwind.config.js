/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      colors: {
        project: {
          main: 'hsl(233, 47%, 7%)',
          card: 'hsl(244, 38%, 16%)',
          accent: 'hsl(277, 64%, 61%)'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lexend: ['Lexend Deca', 'sans-serif']
      },
      fontSize: {
        stats: '15px'
      },
      screens: {
        statsDesktop: '1080px'
      }
    }
  },
  plugins: []
}
