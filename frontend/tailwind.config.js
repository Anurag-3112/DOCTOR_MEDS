/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#065f46',
        primaryLight: '#10b981',
        primarySoft: '#d1fae5',
        primaryDark: '#064e3b',
        accent: '#34d399',
      }
    },
  },
  plugins: [],
};

export default config;