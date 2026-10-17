/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        champagne: {
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F4ECE1', // primary accent matching linen shirt & spotlight
          300: '#E7DC output',
          400: '#D6C3B0', // secondary accent
          500: '#BFA892',
          600: '#9E8873',
          700: '#7B6755',
        },
        surface: {
          pure: '#000000',
          elevated: '#0A0A0C',
          card: '#101014',
          subtle: '#141419',
          border: 'rgba(244, 236, 225, 0.08)',
          twilight: '#19182b', // from user Realtime Colors
        },
        slateIndigo: {
          DEFAULT: '#4e4c82', // from user Realtime Colors
          glow: 'rgba(78, 76, 130, 0.25)',
        },
        crimson: {
          DEFAULT: '#961111', // from user Realtime Colors
        },
      },
      fontFamily: {
        italiana: ['Italiana', 'serif'],
        anton: ['Anton', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        sans: ['Inter', 'Kanit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spotlight-shift': 'spotlightShift 10s ease-in-out infinite alternate',
      },
      keyframes: {
        spotlightShift: {
          '0%': { opacity: '0.4', transform: 'translate(0, 0) scale(1)' },
          '100%': { opacity: '0.7', transform: 'translate(-20px, 15px) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
