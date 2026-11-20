/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // High-End Reference Ink & Authority Palette
        ink: {
          900: '#0F172A', // Slate 900 primary dark ink
          800: '#1E293B', // Slate 800 secondary ink
          700: '#334155', // Slate 700 muted ink
          600: '#475569', // Slate 600 subtle ink
        },
        editorial: {
          blue: '#365679', // Reference steel/petrol editorial accent
          light: '#EEF3F8',
        },
        emeraldAction: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          950: '#022C22',
        },

        // Glossy Aurora Palette
        auroraBg: '#FAFAF9',
        auroraWhite: '#FFFFFF',
        auroraLavender: '#F0EEFF',
        auroraLightBlue: '#EEF5FF',
        auroraPurple: '#6957F5',
        auroraBlue: '#4285F4',
        auroraCyan: '#39BBD5',
        auroraPink: '#F18BB5',
        auroraMint: '#059669',
        auroraText: '#0F172A',
        auroraMuted: '#475569',
        auroraBorder: '#E2E8F0',

        // Standard aliases for ease of use
        pagebg: '#FAFAF9',
        cardbg: '#FFFFFF',
        textprimary: '#0F172A',
        textsecondary: '#475569',
        bordercolor: '#E2E8F0',
        sectionsoft: '#F1F5F9',
        lightblue: '#EEF5FF',
        primarypurple: '#6957F5',
        royalblue: '#4285F4',
        brandcyan: '#39BBD5',
        softpink: '#F18BB5',
        brandmint: '#059669',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'IBM Plex Mono', 'monospace'],
        heading: ['var(--font-serif)', 'var(--font-space-grotesk)', 'serif'],
        body: ['var(--font-sans)', 'var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-aurora': 'linear-gradient(135deg, #6957F5 0%, #4285F4 50%, #39BBD5 100%)',
        'gradient-aurora-pink': 'linear-gradient(135deg, #6957F5 0%, #F18BB5 100%)',
        'gradient-btn': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'gradient-soft': 'linear-gradient(180deg, #FAFAF9 0%, #F1F5F9 50%, #FAFAF9 100%)',
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'sm': '0 1px 3px 0 rgba(15, 23, 42, 0.08), 0 1px 2px -1px rgba(15, 23, 42, 0.08)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 1px 3px 0 rgba(15, 23, 42, 0.02)',
        'card-hover': '0 20px 40px -10px rgba(105, 87, 245, 0.12), 0 2px 6px 0 rgba(15, 23, 42, 0.04)',
        'pill': '0 2px 8px rgba(15, 23, 42, 0.08)',
        'float': '0 20px 40px -15px rgba(15, 23, 42, 0.15)',
        'glossy': '0 4px 20px -2px rgba(15, 23, 42, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 1)',
      },
    },
  },
  plugins: [],
};
