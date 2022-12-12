// function add() {
//     // 闭包变量收集所有参数
//     let args = [...arguments]
//     let inner = function () {
//         // 将参数加入到args中
//         args.push(...arguments)
//         return inner
//     }
//     inner.toString = () => {
//         return args.reduce((i, j) => i + j)
//     }
//     return inner
// }
// console.log(add(1, 2)(2) - 0);


// function add() {
//     const args = [...arguments]
//     let inner = function () {
//         args.push(...arguments)
//         return inner
//     }
//     inner.toString = () => args.reduce((i, j) => i + j)
//     return inner
// }

// 
function add() {
    const args = [...arguments]
    const fn = function () {
        args.push(...arguments)
        return fn
    }
    fn.toString = () => args.reduce((i, j) => i + j)
    return fn
}
console.log(add(1, 2)(2) - 0);

function add() {
    const args = [...arguments]
    const fn = function () {
        args.push(...arguments)
        return fn
    }
    fn.toString() = () => args.reduce((i, j) => i + j)
    return fn
}


function add() {
    let a = [...arguments]
    let fn = function () {
        a.push(...arguments)
        return fn
    }
    fn.toString = () => args.reduce((i, j) => i + j)
    return fn
}