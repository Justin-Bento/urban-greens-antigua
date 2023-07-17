/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'white': 'hsla(148, 62%, 96%, 0.5)',
          '50': 'hsl(148, 62%, 96%)',
          '100': 'hsl(143, 61%, 90%)',
          '200': 'hsl(147, 56%, 80%)',
          '300': 'hsl(151, 54%, 67%)',
          '400': 'hsl(153, 48%, 52%)',
          '500': 'hsl(155, 63%, 36%)',
          '600': 'hsl(156, 70%, 30%)',
          '700': 'hsl(158, 69%, 24%)',
          '800': 'hsl(158, 66%, 20%)',
          '900': 'hsl(159, 64%, 16%)',
          '950': 'hsl(159, 70%, 9%)',
        },
      }
    },
  },
  plugins: [],
}