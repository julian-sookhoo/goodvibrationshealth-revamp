/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f4f7f5',
          100: '#e2ebe5',
          200: '#c5d7cb',
          300: '#9bbda6',
          400: '#7b9e87',
          500: '#5a826a',
          600: '#476856',
          700: '#395446',
          800: '#2f4339',
          900: '#27372f',
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
          500: '#6b6b6b',
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
