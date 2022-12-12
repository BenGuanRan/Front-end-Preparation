function mergeSort(arr) {
    function merge(arr1, arr2) {
        let res = []
        while (arr1.length && arr2.length) {
            arr1[0] < arr2[0] ? res.push(arr1.shift()) : res.push(arr2.shift())
        }
        arr1.length ? res.push(...arr1) : res.push(...arr2)
        return res
    }
    function sort(arr) {
        if (arr.length === 1) {
            return arr
        }
        // 拆分数组
        let m = Math.floor(arr.length / 2)
        let arr1 = arr.slice(0, m)
        let arr2 = arr.slice(m, arr.length)
        return merge(sort(arr1), sort(arr2))
    }
    return sort(arr)

}

// console.log([1, 2, 3, 4, 5].slice(2, 5));
console.log(mergeSort([7, 4, 1, 2, 9, 6, 5, 8]));