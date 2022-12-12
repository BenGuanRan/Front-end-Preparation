Function.prototype.myApply = function (ctx, args = []) {
    if (args && Object.prototype.toString.call(args) !== '[object Array]') {
        throw ('第二个参数应该是数组')
    }
    let fn = Symbol()
    // 1.将方法挂载到对象上
    ctx[fn] = this
    // 2. 执行这个方法
    let res = ctx[fn](...args)
    // 3. 将这个方法从该对象上删除
    delete ctx[fn]
    return res
}

function a(a, b) {
    console.log(this);
    return a + b
}
console.log(a.myApply({ a: 1 }, [1, 3]));
console.log(a.apply({ a: 1 }, [1, 3]));
