const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCassExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
  entry:'./src/index.js',
  output: {
    filename : 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module :{
    rules: [
      {
        test: /\.css$/,
        use: [MiniCassExtractPlugin.loader, 'css-loader'], // use는 뒤에서 부터 적용 됨.. (순서 의미)
        // use: ['style-loader', 'css-loader'], // use는 뒤에서 부터 적용 됨.. (순서 의미)
      },
      {
        test: /\.PNG$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCassExtractPlugin({
      filename: "common.css"
    })
  ],
  devServer : {
    static : {
      directory : path.resolve(__dirname, "dist")
    },
    port: 8000,
  }
}