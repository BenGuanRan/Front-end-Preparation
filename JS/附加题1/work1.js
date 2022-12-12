async function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds)
    })
}
async function task_a() {
    await delay(2000)
    const valid = Math.random() > 0.5
    console.log('a', valid ? '满足要求' : '不满足要求')
    return valid
}
async function work1() {
    const a_flag = await task_a()
    self.postMessage(a_flag)
}
work1()