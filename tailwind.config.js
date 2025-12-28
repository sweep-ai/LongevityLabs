/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#D32F2F',
        'primary-dark': '#B71C1C',
        'background-light': '#F3F4F6',
        'background-dark': '#0A0A0A',
        'surface-dark': '#171717',
      },
      fontFamily: {
        display: ['Teko', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

