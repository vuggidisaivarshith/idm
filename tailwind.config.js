/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Soft Aurora Theme Palette
        pagebg: '#F7F9FF',
        cardbg: '#FFFFFF',
        textprimary: '#111827',
        textsecondary: '#667085',
        bordercolor: '#E8ECF5',
        sectionsoft: '#EEF2FF',

        // Accents
        primarypurple: '#635BFF',
        royalblue: '#4385F5',
        brandcyan: '#20B8D5',
        lavender: '#A78BFA',
        softpink: '#F28BA8',
        brandmint: '#22B98A',

        // Short aliases
        purple: '#635BFF',
        blue: '#4385F5',
        cyan: '#20B8D5',
        pink: '#F28BA8',
        mint: '#22B98A',
        navy: '#1E293B',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-aurora': 'linear-gradient(135deg, #635BFF 0%, #4385F5 50%, #20B8D5 100%)',
        'gradient-btn': 'linear-gradient(135deg, #635BFF 0%, #4385F5 100%)',
        'gradient-soft': 'linear-gradient(180deg, #F7F9FF 0%, #EEF2FF 50%, #F7F9FF 100%)',
        'gradient-badge': 'linear-gradient(135deg, rgba(99, 91, 255, 0.08), rgba(32, 184, 213, 0.08))',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(67, 133, 245, 0.06)',
        'soft-lg': '0 10px 30px -4px rgba(99, 91, 255, 0.1)',
        'card': '0 2px 12px rgba(17, 24, 39, 0.04)',
        'card-hover': '0 12px 32px rgba(99, 91, 255, 0.12)',
      },
    },
  },
  plugins: [],
};
