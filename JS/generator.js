// function* foo() {
//     let a = undefined
//     a = yield '状态1'
//     a = yield '状态2'
//     return '终止状态'
// }
// const f = foo()
// for (let i of f) {
//     console.log(i);
// }
// 状态1
// 状态2
function asyncFun(val) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(val);
            res(val)
        }, 1000)
    })
}

// asyncFun(111).then(res => { console.log(res); })
function* asyncJob() {
    // ...其他代码
    console.log(111);
    var f = yield asyncFun(333);
    // ...其他代码
    console.log(f, 222);
    return 'ok'
}
const reader = asyncJob()
reader.next()
reader.next()