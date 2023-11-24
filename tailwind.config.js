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
        blue: '#5CA5A5',
        darkBlue: '#2B3939',
        grey: '#B7C4C4',
        darkGrey: '#7C8F8F',
      },
    },
  },
  plugins: [],
}
