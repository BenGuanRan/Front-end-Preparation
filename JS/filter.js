const arr = [1, 2, 3]
Array.prototype.myFilter = function (fn, thisArg) {
    // 处理数组类型异常
    if (this === null || this === undefined)
        throw new TypeError('Can not find from null or undefined!')
    // 处理函数类型异常
    if (Object.prototype.toString.call(fn) !== '[object Function]')
        throw new TypeError('fn + is note a function!')
    // 为了应对严格模式this不会包装的问题
    let T = Object(this)
    let res = []
    for (let i = 0; i < T.length; i++) {
        if (fn.call(thisArg, T[i], i, T))
            res.push(T[i])
    }
    return res
}
console.log(arr.filter((i) => i > 2));