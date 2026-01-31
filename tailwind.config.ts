import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mike Kapin Professional Brand Colors
        brand: {
          bg: {
            primary: '#FFFFFF',
            secondary: '#F8F9FA',
            tertiary: '#E9ECEF',
            hover: '#F1F3F4',
          },
          text: {
            primary: '#212529',
            secondary: '#6C757D',
            tertiary: '#ADB5BD',
          },
          accent: {
            orange: '#FF8500',
            'orange-hover': '#E6730E',
            blue: '#0066CC',
            'blue-hover': '#0052A3',
          },
          border: {
            DEFAULT: '#DEE2E6',
            light: '#E9ECEF',
          },
        },
        // Keep legacy claude colors for compatibility during migration
        claude: {
          bg: {
            primary: '#FFFFFF',
            secondary: '#F8F9FA',
            tertiary: '#E9ECEF',
            hover: '#F1F3F4',
          },
          text: {
            primary: '#212529',
            secondary: '#6C757D',
            tertiary: '#ADB5BD',
          },
          accent: {
            orange: '#FF8500',
            'orange-hover': '#E6730E',
            blue: '#0066CC',
            'blue-hover': '#0052A3',
          },
          border: {
            DEFAULT: '#DEE2E6',
            light: '#E9ECEF',
          },
        },
        // Dark theme for access gate
        'mike-orange': '#FF8500',
        'brand-dark-bg': '#1A1A1A',
        'brand-dark-secondary': '#2D2D2D',
        'brand-dark-border': '#404040',
        'brand-dark-text': '#E5E5E5',
        'brand-dark-text-secondary': '#999999',
      },
    },
  },
  plugins: [],
} satisfies Config;
