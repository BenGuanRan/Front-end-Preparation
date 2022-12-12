Function.prototype.myBind = function (ctx, ...args1) {
    return (...args2) => {
        let fn = Symbol()
        ctx[fn] = this
        let res = ctx[fn](...args1, ...args2)
        delete ctx[fn]
        return res
    }
}

function a(a, b) {
    console.log(arguments);
    return a + b
}

console.log(a.myBind({ a: 1 }, 1, 3));
// console.log(a.bind({ a: 1 }, 1, 3)());

Function.prototype.myBind = function (target, ...args1) {
    return function (...args2) {
        let s = new Symbol()
        target[s] = this
        let res = target[s](...args1, ...args2)
        delete ctx[s]
        return res
    }
}