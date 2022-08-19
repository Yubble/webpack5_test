const path = require('path')
const HelloWorldPlugin = require('./plugins/MyHtmlPlugin')

module.exports = {
  entry: './src/testChunk.js',
  mode: 'development',
  output: {
    filename: 'pbundle.js',
    path: path.resolve(__dirname, 'distPlugin')
  },
  plugins: [
    new HelloWorldPlugin({
      template: './public/index.html'
    })
  ]
}
