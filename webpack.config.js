const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: 
      {
        path: path.resolve(__dirname, 'dist'),
        filename:'main.js',
      },
    plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
    module: {
      rules: [
          {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
          },
          {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            use: "url-loader?limit=10000&mimetype=application/font-woff"
          }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            use: "url-loader?limit=10000&mimetype=application/font-woff"
          }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            use: "url-loader?limit=10000&mimetype=application/octet-stream"
          }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            use: "file-loader"
          }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: "url-loader?limit=10000&mimetype=image/svg+xml"
          }

      ]
    }
}