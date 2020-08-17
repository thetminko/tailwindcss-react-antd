module.exports = {
  corePlugins: {
    preflight: false // disable to let antd use its base style
  },
  purge: ['./src/**/*.html', './src/**/*.jsx'], // this setting will automatically purge if NODE_ENV is production else it will not do anything
  // purge: { // use this if you want to run even in development env. You will need to re-build if you include classes that were already purged
  //   enabled: true,
  //   content: ['./src/**/*.html', './src/**/*.jsx']
  // },
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