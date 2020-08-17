module.exports = {
  corePlugins: {
    preflight: false // false to disable tailwindcss base styles.  disable to use with antd
  },
  // purge: ['./src/**/*.html', './src/**/*.jsx'], // this setting will automatically purge if NODE_ENV is production else it will not do anything
  purge: { // use this if you want to run even in non-production env
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.jsx']
  },
  theme: {
    extend: {
      colors: {
        limegreen: '#a8ff60'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'] // allow hover, focus for background color
  },
  plugins: []
}