const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  publicPath: '/ct2/',
  configureWebpack: {
    plugins: [
      new Visualizer({ filename: './statistics.html' })
    ]
  },
  chainWebpack: (config) => {
    // A, remove the plugin
    config.plugins.delete('prefetch')
    // or:
    // B. Alter settings:
    // config.plugin('prefetch').tap(options => {
    //   options.fileBlackList.push([/myasyncRoute(.)+?\.js$/])
    //   return options
    // })
  }
}
