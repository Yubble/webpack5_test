/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-12-29 19:41:27
 **/
const path = require('path')

module.exports = {
  entry: './src/testChunk.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[contenthash]'
  },
  optimization: {
    chunkIds: "deterministic",
    moduleIds: "deterministic",
    mangleExports: "deterministic"
  }
}
