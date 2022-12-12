const path = require('path')
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
            {
                test: /\.css$/, // 正则，检测所有以css结尾的文件
                use: [
                    'style-loader', // 将commonjs引入的css文件以创建script标签的方式添加到HTML页面中
                    'css-loader' // 将css资源编译成commonjs资源
                ] // 从右往左（下-上）一次使用css-loader style-loader
            },
            {
                test: /\.less$/, // 正则，检测所有以css结尾的文件
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader' // 将less文件翻译成css文件
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader' // 将scss文件翻译成css文件
                ]
            },

        ]
    },
    plugins: [
        // 插件的配置
    ],
    mode: 'development'
}