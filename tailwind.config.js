/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#06080F',
        darkcard: '#0D111E',
        cyanGlow: '#00F2FE',
        purpleGlow: '#8A2BE2',
        emeraldGlow: '#10B981',
      },
    },
  },
  plugins: [],
};
