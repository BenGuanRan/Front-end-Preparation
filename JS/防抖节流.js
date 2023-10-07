function Debounce(fn, time) {
    let timer = null
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn.bind(this, ...args), timer)
    }
}

function Throttle(fn, time) {
    let timer = null
    return function () {
        if (timer) return
        timer = setTimeout(() => {
            fn.apply(this, args)
            clearTimeout(timer)
            timer = null
        }, time)
    }
}

function Debounce(fn, time) {
    let timer = null
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn.bind(this, ...args), time)
    }
}

function Throttle(fn, timer) {
    let timer = null
    return function (...args) {
        if (timer) return
        timer = setTimeout(() => {
            fn.apply(this, args)
            clearTimeout(timer)
            timer = null
        }, timer)
    }
}

function Debounce(fn, time) {
    let timer = null
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn.bind(this, ...args), time)
    }
}

function Throttle(fn, time) {
    let timer = null
    return function (...args) {
        if (timer) return
        timer = setTimeout(() => {
            fn.apply(this, args)
            clearTimeout(timer)
            timer = null
        }, time)
    }
}