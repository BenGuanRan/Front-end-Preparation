const arr = [1, 2, 3, 4, 5]
Array.prototype.myReduce = function (fn, beginNumber) {
    if (!(fn instanceof Function))
        throw (fn + 'is note a function!')
    let res = beginNumber || 0
    let arr = this
    for (let i = 0; i < arr.length; i++) {
        res = fn(res, arr[i], i, arr)
    }
    return res
}
console.log(arr.myReduce((a, b) => a + b, 1));