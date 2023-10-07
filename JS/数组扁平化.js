function flatten(arr, layer = 1) {
    let res = []
    let target = arr, count = 1
    while (count <= layer) {
        for (let i = 0; i < target.length; i++) {
            let item = target[i]
            if (Array.isArray(item)) res.push(...item)
            else res.push(item)
        }
        if (res.every(i => !Array.isArray(i))) return res
        count++
        if (count <= layer) {
            target = res
            res = []
        }

    }
    return res

}

console.log(flatten([1, [2, [3]]], Infinity));

const res = []
function myFlatten(arr, n) {
    for (let i of arr) {
        if (Array.isArray(i) && n > 0) {
            myFlatten(i, --n)
        } else {
            res.push(i)
        }
    }
}
myFlatten([1, [2, [3]]], Infinity)
console.log(res);

function myFlattenBetter(arr, n) {
    const res = []
    arr.forEach((i) => {
        if (Array.isArray(i) && n > 0) {
            res.push(...myFlattenBetter(i, --n))
        } else {
            res.push(i)
        }
    })
    return res
}
console.log(myFlattenBetter([1, [2, [3]]], 1));



function myFlatten(arr, i) {
    const res = []
    arr.forEach(i => {
        if (Array.isArray(i) && n > 0) {
            res.push(...myFlattenBetter(i, --n))
        } else {
            res.push(i)
        }
    })
    return res
}

function myFlatten(arr, n) {
    const res = []
    for (let i of arr) {
        if (Array.isArray(i) && n > 0) {
            res.push(...myFlatten(i, --n))
        } else {
            res.push(i)
        }
    }
    return res
}