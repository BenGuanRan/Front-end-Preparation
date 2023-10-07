const { throwError } = require("rxjs")

const myNew = function (fn, ...args) {
    // 检验fn是否为函数类型
    if (Object.prototype.toString.call(fn) !== '[Object function]')
        throw ('First parmas must be a function!')
    // 创建对象并挂载原型链
    const obj = Object.create(fn.prototype)
    // 调用构造函数为obj对象赋值
    const res = fn.apply(obj, ...args)
    if (typeof res === 'function' || typeof res === 'object' && res !== null)
        return res
    return obj
}



const myNew2 = function (fn, ...args) {
    if (Object.prototype.toString.call(fn) !== '[Object function]') {
        throw Error('First params must be a function!')
    }
    // 创建对象实例
    const obj = Object.create(fn.prototype)
    const res = fn.apply(obj, args)
    // 若res不是简单数据类型
    if (typeof res === 'function' || typeof res === 'object' && res !== null)
        return res
    return obj
}
