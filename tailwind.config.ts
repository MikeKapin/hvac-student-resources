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
        claude: {
          bg: {
            primary: '#1F1F1F',
            secondary: '#2A2A2A',
            tertiary: '#343434',
            hover: '#3F3F3F',
          },
          text: {
            primary: '#E8E8E8',
            secondary: '#A0A0A0',
            tertiary: '#707070',
          },
          accent: {
            orange: '#CC785C',
            'orange-hover': '#D68A6E',
            blue: '#8B9DC3',
            'blue-hover': '#9DAED0',
          },
          border: {
            DEFAULT: '#3F3F3F',
            light: '#4A4A4A',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
