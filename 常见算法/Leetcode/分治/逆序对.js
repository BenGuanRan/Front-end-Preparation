
function noCross(arr, l, r) {
    let mid = Math.floor((r + l) / 2)
    let temp
    if ((r - l) <= 1) {
        if (arr[l] > arr[r]) {
            // 交换数组元素
            temp = arr[l]
            arr[l] = arr[r]
            arr[r] = temp
            return 1
        } else
            return 0
    }
    return noCross(arr, l, mid) + noCross(arr, mid + 1, r) + cross(arr, l, r)
}

function cross(arr, l, r) {
    let count = 0
    let m = Math.floor((r + l) / 2)
    let lp = l, rp = m + 1
    while (lp <= m && rp <= r) {
        if (arr[lp] < arr[rp]) {
            lp++
            count += (rp - m - 1)
        }
        else {
            rp++
        }

    }
    while (lp <= m) {
        count += (rp - m - 1)
        lp++
    }
    return count
}
function getTime_1(arr) {
    let a = Date.now()
 noCross(arr, 0, arr.length - 1);
    let b = Date.now()
    return (b - a)
}
module.exports = getTime_1





