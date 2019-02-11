const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  publicPath: '/ct2/',
  configureWebpack: {
    plugins: [
      new Visualizer({ filename: './statistics.html' })
    ]
  }
}
