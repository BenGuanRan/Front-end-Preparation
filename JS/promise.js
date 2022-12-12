class MyPromise {
    constructor(exector) {
        // 初始化值
        this.initValue()
        // 初始化this指向
        this.initThis()
        // 执行传进来的函数
        try {
            exector(this.resolve, this.reject)
        } catch (e) {
            this.resolve(e)
        }

    }
    initValue() {
        this.state = 'PENDING' // Promise状态
        this.value = null // 结果
        this.onFulfilledCallbacks = [] // 存放异步执行（定时器）时的回调
        this.onRejectedCallbacks = [] // 存放异步执行（定时器）时的回调
    }
    initThis() {
        // 为了保证函数指向始终指向当前的promise实例
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }
    resolve(res) {
        // 保证状态只改变一次
        if (this.state !== 'PENDING')
            return
        this.state = 'FULFILLED'
        this.value = res
        while (this.onFulfilledCallbacks.length !== 0) {
            this.onFulfilledCallbacks.shift()(this.value)
        }
    }
    reject(err) {
        if (this.state !== 'PENDING')
            return
        this.state = 'REJECTED'
        this.value = err
        while (this.onRejectedCallbacks.length !== 0) {
            this.onRejectedCallbacks.shift()(this.value)
        }
    }
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : onFulfilled => onFulfilled
        onRejected = typeof onRejected === 'function' ? onRejected : onRejected => onRejected
        // 加定时器是为了解决微任务问题
        setTimeout(() => {
            // 构造一个Promise，确保then一定返回Promise
            const resolvePromise = cb => {
                try {
                    const x = cb(this.PromiseResult)
                    if (x === thenPromise) {
                        // 不能返回自身哦
                        throw new Error('不能返回自身。。。')
                    }
                    if (x instanceof MyPromise) {
                        // 如果返回值是Promise
                        // 如果返回值是promise对象，返回值为成功，新promise就是成功
                        // 如果返回值是promise对象，返回值为失败，新promise就是失败
                        // 谁知道返回的promise是失败成功？只有then知道
                        x.then(resolve, reject)
                    } else {
                        // 非Promise就直接成功
                        resolve(x)
                    }
                } catch (err) {
                    // 处理报错
                    reject(err)
                    throw new Error(err)
                }
            }
        })


        if (this.state === 'FULFILLED')
            resolvePromise(onFulfilled)
        else if (this.state === 'REJECTED')
            resolvePromise(onRejected)
        else if (this.state === 'PENDING') {
            // 如果还是PENDING，说明存在异步执行的情况，因此，需要先将回调函数存放起来
            this.onFulfilledCallbacks.push(resolvePromise(onFulfilled.bind(this)))
            this.onRejectedCallbacks.push(resolvePromise(onRejected.bind(this)))
        }
    }
}
const p = new MyPromise((res, rej) => {
    setTimeout(() => {
        res(11111)
    }, 1000)
})
p.then(res => {
    console.log(res);
})
console.log(p.value);