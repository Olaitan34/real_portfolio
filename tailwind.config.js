/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E',
        'dark-card': '#2A2A2A',
        'neon-purple': '#a855f7',
        'light-text': '#E0E0E0',
        'dark-text': '#BDBDBD',
      },
      boxShadow: {
        'neon': '0 0 5px #a855f7, 0 0 10px #a855f7, 0 0 15px #a855f7',
        'neon-sm': '0 0 2px #a855f7, 0 0 5px #a855f7',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          'from': { textShadow: '0 0 5px #a855f7, 0 0 10px #a855f7' },
          'to': { textShadow: '0 0 20px #a855f7, 0 0 30px #a855f7' },
        }
      }
    }
  },
  plugins: [],
}
