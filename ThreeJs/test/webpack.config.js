const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        })
    ],
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
}