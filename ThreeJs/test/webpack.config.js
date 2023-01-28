const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { PassThrough } = require('stream');
module.exports = {
    // 入口文件
    entry: './src/main.tsx',
    // 出口
    output: {
        path: path.resolve(__dirname, "dist"), // 绝对路径
        filename: 'main.js' // 文件名
    },
    // 加载器
    module: {
        rules: [
            // loader的配置
            {
                test: /.tsx?$/,
                use: {
                    loader: "ts-loader",
                },
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, "./src/assets/fonts"), to: path.resolve(__dirname, "./dist/fonts") },
                { from: path.resolve(__dirname, "./src/assets/images"), to: path.resolve(__dirname, "./dist/images") },
            ],
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    },
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