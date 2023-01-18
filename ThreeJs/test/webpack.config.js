const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { PassThrough } = require('stream');
module.exports = {
    // 入口文件
    entry: './src/main.js',
    // 出口
    output: {
        path: path.resolve(__dirname, "dist"), // 绝对路径
        filename: 'main.js' // 文件名
    },
    // 加载器
    module: {
        rules: [
            // loader的配置
        ]
    },
    plugins: [
        // 插件的配置
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, "./src/assets/fonts"), to: path.resolve(__dirname, "./dist/fonts") },
            ],
        }),
    ],
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, '/src/assets'),
        },
        // contentBase: path.join(__dirname, '/src/'),
        hot: true,
        open: true,
        compress: true,
        port: 9000,
    },
}