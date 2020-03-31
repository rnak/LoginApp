const HtmlWebPackPlugin = require("html-webpack-plugin");
require("babel-polyfill");
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path')

module.exports = {

  entry: ["babel-polyfill", "./src/index.js"],   
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    compress: true,//To compress the bundle 
  }, 
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip'
    })
  ]
};