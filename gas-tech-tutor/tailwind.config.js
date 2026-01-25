/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'claude-dark-bg': '#1F1F1F',
        'claude-dark-secondary': '#2A2A2A',
        'claude-dark-border': '#3F3F3F',
        'claude-dark-text': '#E8E8E8',
        'claude-dark-text-secondary': '#A0A0A0',
        'mike-orange': '#CC785C',
        // Keep some legacy colors for compatibility
        primary: {
          blue: '#CC785C', // Map to orange
          red: '#CC785C',
        },
        dark: {
          bg: '#1F1F1F',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.05em',
        wider: '0.1em',
      },
    },
  },
  plugins: [],
}