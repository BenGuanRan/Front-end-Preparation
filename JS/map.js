const arr = [1, 2, 3, 4, 5]
Array.prototype.myMap = function (fn, thisArgs) {
    if (!(fn instanceof Function))
        throw ('Error in params')
    let resArray = []
    let curArray = this
    for (let i = 0; i < curArray.length; i++) {
        resArray.push(fn.call(thisArgs, curArray[i], i, curArray))
    }
    return resArray
}
console.log(arr.myMap((a, b, c) => c));
