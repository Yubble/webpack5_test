/**
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-12-29 19:41:27
 **/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const VueLoaderPlugin  = require('vue-loader/dist/pluginWebpack5').default

module.exports = {
  entry: './src/vueMain.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[contenthash]'
  },
  optimization: {
    chunkIds: "deterministic",
    moduleIds: "deterministic",
    mangleExports: "deterministic"
  },
  devServer: {
    port: 8465,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Method": "GET,POST,PUT,OPTIONS"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      remotes: {
        lib_remote: 'lib_remote@http://localhost:8462/remoteEntry.js'
      }
    })
  ]
}
