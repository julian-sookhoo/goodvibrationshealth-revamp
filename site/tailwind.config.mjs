/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f0f9fb',
          100: '#d1eef4',
          200: '#a3dce9',
          300: '#63c4d8',
          400: '#2aa8c2',
          500: '#1a8aa4',
          600: '#156e85',
          700: '#105368',
          800: '#0c3d4e',
          900: '#082c39',
        },
        cream: {
          50:  '#fdfcf8',
          100: '#faf7f2',
          200: '#f4ede0',
          300: '#eaddca',
        },
        terra: {
          400: '#c47941',
          500: '#a86335',
        },
        charcoal: {
          900: '#1c1c1c',
          700: '#3d3d3d',
          600: '#525252',
          500: '#6b6b6b',
          400: '#909090',
          300: '#b8b8b8',
          200: '#d4d4d4',
        },
      },
      fontFamily: {
        heading: ['Lora', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
        narrow:  '760px',
      },
    },
  },
  plugins: [],
}
