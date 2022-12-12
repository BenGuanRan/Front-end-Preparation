async function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds)
    })
}
async function task_b() {
    await delay(5000)
    const valid = Math.random() > 0.5
    console.log('b', valid ? '满足要求' : '不满足要求')
    return valid
}
async function work1() {
    const b_flag = await task_b()
    self.postMessage(b_flag)
}
work1()