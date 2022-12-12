// ------------ 附加题 1 (选做)：等待最先完成的任务
/** @param {number} milliseconds */
async function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds)
    })
}

/** 执行任务 a 获取结果，返回是否符合要求 */
async function task_a() {
    await delay(2000)
    const valid = Math.random() > 0.5
    console.log('a', valid ? '满足要求' : '不满足要求')
    return valid
}

/** 执行任务 b 获取结果，返回是否符合要求 */
async function task_b() {
    await delay(5000)
    const valid = Math.random() > 0.5
    console.log('b', valid ? '满足要求' : '不满足要求')
    return valid
}

/** 并行开始两个任务，task_a 和 task_b 任意一个完成且满足要求后立即 return true, 且不等待另一个任务（短路） 
    如果第一个完成的任务不满足要求，需要看第二个任务是否满足要求，只有都不满足才返回 false
*/
async function a_or_b() {
    // todo: 请实现该函数
    task_a()
    task_b()
    return false
}

// console.time()
// if (await a_or_b())
//     console.log('task_a 或 task_b 满足要求')
// else
//     console.log('task_a 且 task_b 都不满足要求')
// console.timeEnd()
a_or_b()