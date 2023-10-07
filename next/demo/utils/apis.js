export async function requestData(time, flag = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const val = Math.random()
            if (val >= 0.5 || flag) resolve('This is data!')
            else reject('Error!')
        }, time)
    })
}

export async function requestRandomData(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const val = Math.random()
            resolve(val)
        }, time)
    })
}