const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]

function quicksort(arr, l, r) {
    let right = r
    if (l >= r) {
        return
    }
    let baseNum = arr[l]
    let baseIndex = l
    l = l + 1
    while (l < r) {
        if (arr[r] > baseNum)
            r--
        if (arr[l] < baseNum)
            l++
        if (arr[l] >= baseNum && arr[r] <= baseNum) {
            // 交换
            let temp = arr[l]
            arr[l] = arr[r]
            arr[r] = temp
            l++
            r++
        }
    }
    if (arr[l] <= arr[baseIndex]) {
        // 基数和a[l]交换位置
        let temp = arr[baseIndex]
        arr[baseIndex] = arr[l]
        arr[l] = temp
        quicksort(arr, baseIndex, l - 1)
        quicksort(arr, l + 1, right)
    } else {
        // 基数和a[l-1]交换位置
        let temp = arr[baseIndex]
        arr[baseIndex] = arr[l - 1]
        arr[l - 1] = temp
        quicksort(arr, baseIndex, l - 2)
        quicksort(arr, l, right)
    }
    // 基数左右两边分别进行quicksort操作

}
quicksort(arr, 0, arr.length - 1)
console.log(arr);
