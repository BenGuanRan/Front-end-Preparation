const arr = [7, 4, 1, 2, 9, 6, 5, 8]
function createHeap(arr) {
    const len = arr.length
    // 下沉操作
    function down(i) {
        while (i < len) {
            left_index = 2 * i + 1
            right_index = 2 * i + 2
            if (left_index >= len) return
            let index = arr[left_index] > arr[right_index] ? left_index : (arr[right_index] ? right_index : left_index)
            let t = arr[i]
            arr[i] = arr[index]
            arr[index] = t
            i = index
        }
    }
    for (let i = len / 2 - 1; i >= 0; i--) {
        down(i)
    }
    return arr
}



console.log(createHeap(arr));