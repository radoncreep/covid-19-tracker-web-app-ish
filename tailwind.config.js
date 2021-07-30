module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      center: true
    },
    container: {
      center: true,
      padding: '2rem;'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}