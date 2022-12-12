const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const path = require('path')

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        })
    ],
    devServer: {
        open: true
    },
    mode: "development"
}