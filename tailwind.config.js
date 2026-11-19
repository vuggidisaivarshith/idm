/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Glossy Aurora Palette
        auroraBg: '#F8FAFF',
        auroraWhite: '#FFFFFF',
        auroraLavender: '#F0EEFF',
        auroraLightBlue: '#EEF5FF',
        auroraPurple: '#6957F5',
        auroraBlue: '#4385F4',
        auroraCyan: '#39BBD5',
        auroraPink: '#F18BB5',
        auroraMint: '#22B98A',
        auroraText: '#171B2C',
        auroraMuted: '#667085',
        auroraBorder: '#E8ECF5',

        // Standard aliases for ease of use
        pagebg: '#F8FAFF',
        cardbg: '#FFFFFF',
        textprimary: '#171B2C',
        textsecondary: '#667085',
        bordercolor: '#E8ECF5',
        sectionsoft: '#F0EEFF',
        lightblue: '#EEF5FF',
        primarypurple: '#6957F5',
        royalblue: '#4285F4',
        brandcyan: '#39BBD5',
        softpink: '#F18BB5',
        brandmint: '#22B98A',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-aurora': 'linear-gradient(135deg, #6957F5 0%, #4285F4 50%, #39BBD5 100%)',
        'gradient-aurora-pink': 'linear-gradient(135deg, #6957F5 0%, #F18BB5 100%)',
        'gradient-btn': 'linear-gradient(135deg, #6957F5 0%, #4285F4 100%)',
        'gradient-soft': 'linear-gradient(180deg, #F8FAFF 0%, #F0EEFF 50%, #F8FAFF 100%)',
      },
      boxShadow: {
        'card': '0 2px 14px rgba(23, 27, 44, 0.05)',
        'card-hover': '0 16px 36px rgba(105, 87, 245, 0.12)',
        'pill': '0 2px 8px rgba(105, 87, 245, 0.1)',
        'float': '0 20px 40px -15px rgba(23, 27, 44, 0.15)',
      },
    },
  },
  plugins: [],
};
