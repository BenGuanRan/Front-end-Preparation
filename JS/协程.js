// 协程A
function* A() {
    console.log('我是协程A');
    yield B() // 将控制权交给协程B
    console.log('结束了');
}
function B() {
    console.log('我是协程B');
    return '我是B传给A的值'
}
const a = A()
a.next()
a.next()