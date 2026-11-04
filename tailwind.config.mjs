/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        stone: {
          paper: '#F6F4EF',
          warm: '#ECE8DF',
          border: '#D5CFC2',
        },
        ink: {
          DEFAULT: '#141514',
          muted: '#525652',
        },
        forest: {
          DEFAULT: '#163024',
          light: '#224736',
          accent: '#2B5B44',
          tint: '#E6EFEA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
