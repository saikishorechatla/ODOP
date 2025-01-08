export default  {
  content: [
    './index.html', // Path to HTML files
    './src/**/*.{js,jsx,ts,tsx}', // Path to React components
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1D4ED8', // Custom primary color
      },
      spacing: {
        '72': '18rem', // Custom spacing
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography'), 
  ],
}
