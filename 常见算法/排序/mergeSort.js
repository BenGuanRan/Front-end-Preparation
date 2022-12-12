const arr = [7, 4, 1, 2, 9, 6, 5, 8, 3]

function merge(arr1, arr2) {
    let res = []
    let i = 0, j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }
    i === arr1.length ? res.push(...arr2.slice(j, arr2.length)) : res.push(...arr1.slice(i, arr1.length))
    return res
}

function sort(arr) {
    if (arr.length === 1)
        return arr
    let left = arr.slice(0, arr.length / 2)
    let right = arr.slice(arr.length / 2, arr.length)
    console.log(left, right);
    return merge(sort(left), sort(right))
}

console.log(sort(arr));