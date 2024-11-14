/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        thunder: {
          50: '#f4f2f2',
          100: '#e4dedd',
          200: '#cbbfbd',
          300: '#ad9897',
          400: '#967979',
          500: '#876b6d',
          600: '#745a5e',
          700: '#5e4a4e',
          800: '#514246',
          900: '#473c40',
          950: '#2a2225'
        }
      }
    }
  },
  plugins: []
}
