// 导入C++模块
const addon = require('./build/Release/make.node')
function get_double_mem(x) {
    // 获取内存中十进制形式
    const b = Number(addon.make_metrication(x.toString()))
    // 十进制转换为十六进制
    return b.toString(16)
}
console.log(get_double_mem(13.25));