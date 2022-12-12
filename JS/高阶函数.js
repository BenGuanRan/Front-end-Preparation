// 防抖，被装饰的函数每隔一定时间间隔才能运行，若强制运行，则会重新计算间隔时间
export function Debounce(fn, time) {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(fn.bind(this, ...args), time)
    }
}

// 函数只执行一次
export function Once(fn) {
    let flag = true
    return function (...args) {
        if (flag) {
            flag = false
            return fn.apply(this, args)
        }
    }
}

// 函数只执行限定次数
export function Limit(fn, num) {
    let count = 0
    return function (...args) {
        count++
        if (count <= num)
            return fn.apply(this, args)
    }
}

// 节流， 函数在特定时间内只能执行一次
export function Throttle(fn, time) {
    let timer = null
    return function (...args) {
        if (timer) return
        timer = setTimeout(() => {
            clearTimeout(timer)
            fn.apply(this, args)
        }, time)
    }

}



// 定义操作栈，间隔某个时间从操作栈取出执行(延迟执行效果)
export function Consumer(fn, time) {
    const ops = []
    let timer = null
    return function (...args) {
        ops.push(fn.bind(this, ...args))
        if (timer) return
        timer = setInterval(() => {
            if (ops.length === 0) {
                clearInterval(timer)
                timer = null
                return
            }
            return (ops.shift())() // 立即执行函数
        }, time)
    }
}

function Base(fn) {
    return function (...args) {
        return fn.apply(this, args)
    }
}


// 中级版防抖加节流
function Balance(fn, delay) {

}