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
                test: /\.png$/i,
                type: "asset/resource"
            },
            {
                test: /\.txt$/i,
                type: 'asset/source'
            },
            {
                test: /\.(woff|woff2)$/i,
                type: "asset/resource"
            },

        ]
    }
}