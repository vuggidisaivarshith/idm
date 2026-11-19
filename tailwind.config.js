/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Foundation Design Tokens
        midnight: '#090B16',
        deepviolet: '#15112B',
        navy: '#101C32',
        purple: '#8B5CF6',
        blue: '#2563EB',
        cyan: '#00D4FF',
        pink: '#FF3CAC',
        neongreen: '#00F5A0',

        // Aliases & backward-compatible tokens
        darkbg: '#090B16',
        darkcard: '#0D111E',
        electric: '#2563EB',
        neonpink: '#FF3CAC',
        cyanGlow: '#00D4FF',
        purpleGlow: '#8B5CF6',
        emeraldGlow: '#00F5A0',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #8B5CF6 0%, #2563EB 35%, #00D4FF 70%, #FF3CAC 100%)',
        'gradient-brand-r': 'linear-gradient(to right, #8B5CF6, #2563EB, #00D4FF)',
        'gradient-cta': 'linear-gradient(135deg, #8B5CF6, #2563EB)',
        'gradient-cyan-blue': 'linear-gradient(135deg, #00D4FF, #2563EB)',
        'gradient-purple-pink': 'linear-gradient(135deg, #8B5CF6, #FF3CAC)',
        'gradient-glass': 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(0,212,255,0.06))',
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(139,92,246,0.35)',
        'glow-cyan': '0 0 30px rgba(0,212,255,0.35)',
        'glow-pink': '0 0 30px rgba(255,60,172,0.3)',
        'glow-green': '0 0 30px rgba(0,245,160,0.3)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
