// 浅拷贝区别于深拷贝，浅拷贝不是直接赋值，当对象只有一层的时候，浅拷贝也就是深拷贝。
// 浅拷贝
// 1. 手动实现
const shallowClone = (target) => {
    if (typeof target == 'object' && target !== null) {
        const cloneTarget = Array.isArray(target) ? [] : {}
        // 遍历target属性，对其赋值
        for (let i in target) {
            // 确保属性在自身对象上
            if (target.hasOwnProperty(i)) {
                cloneTarget[i] = target[i]
            }
        }
        return cloneTarget
    } else {
        return target
    }
}
// 2. Objecrt.assign()
// 3. concat浅拷贝数组
// 4. slice浅拷贝数组
// 5. ... ES6展开运算符

// 深拷贝
// 递归
function deepCopy(target) {
    if (typeof target !== 'object' || target === null) {
        return target
    }
    let res = Array.isArray(target) ? [] : {}
    for (let prop in target) {
        if (target.hasOwnProperty(prop)) {
            if (typeof target[prop] !== 'object') {
                res[prop] = target[prop]
            } else {
                res[prop] = deepCopy(target[prop])
            }
        }
    }
    return res
}

// const a = {
//     a: 1,
//     b: [12, 2],
//     c: { x: 1, y: { z: 2 } },
//     d() {
//         return 1
//     }
// }
// const b = deepCopy(a)
// b.c.x = 2
// console.log(a, b);

// function deepCopy2(target) {
//     if (typeof target !== 'object' || target === null) {
//         return target
//     }
//     let res = Array.isArray(target) ? [] : {}
//     while() {

//     }
// }

function deepCopy(target) {
    if (typeof target !== 'object' || target === null) {
        return target
    }
    const res = Array.isArray(target) ? [] : {}
    for (let key in target) {
        if (typeof target[key] !== 'object' || target === null)
            res[key] = target[key]
        else res[key] = deepCopy(target[key])
    }
    return res
}


function deepCopy(target) {
    // 如果是简单引用
    if (typeof target !== 'object' || target === null)
        return target
    const res = Array.isArray(target) ? [] : {}
    for (let k in target) {
        if (typeof target[k] !== 'object' || target[k] === null)
            res[k] = target[k]
        else
            res[k] = deepCopy(target[k])
    }
    return res

}