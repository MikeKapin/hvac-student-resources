/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'claude-dark-bg': '#1F1F1F',
        'claude-dark-secondary': '#2A2A2A',
        'claude-dark-border': '#3F3F3F',
        'claude-dark-text': '#E8E8E8',
        'claude-dark-text-secondary': '#A0A0A0',
        'mike-orange': '#CC785C'
      }
    },
  },
  plugins: [],
}