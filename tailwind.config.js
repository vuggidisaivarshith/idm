module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0E14',
        copper: '#D4AF37',
        slate: '#2C3E50',
        mist: '#4A6572',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
