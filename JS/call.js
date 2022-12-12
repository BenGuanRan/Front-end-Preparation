Function.prototype.myCall = function (ctx, ...args) {
    // 让属性值唯一
    let fn = Symbol()
    // 绑定this
    ctx[fn] = this
    // 执行函数
    let res = ctx[fn](...args)
    // 删除绑定的属性
    delete ctx[fn]
    return res
}
function a(a, b) {
    console.log(this);
    return a + b
}
console.log(a.myCall({ a: 1 }, 1, 3));
console.log(a.call({ a: 1 }, 1, 3));
