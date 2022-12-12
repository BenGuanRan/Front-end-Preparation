const arr = [1]
Array.prototype.myPush = function (...args) {
    if (this == undefined)
        throw ('this is null or not defined')
    if (isNaN(this.length)) {
        throw ('Invalid array length')
    }
    for (let i = 0; i < args.length; i++) {
        this[this.length] = args[i]
    }
    return this.length
}
Array.prototype.myPop = function () {
    if (this == undefined)
        throw ('this is null or not defined')
    if (this.length == 0) {
        return undefined
    }
    this.length--
    return this[this.length - 1]
}
arr.myPop()
console.log(arr.length);