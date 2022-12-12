const arr = [-7, -1, 4, -4, 9, -3, 11, 1]

function bestNearPoint(arr) {
    arr.sort((a, b) => a - b)
    if (arr.length === 2) {
        return Math.abs(arr[0] - arr[1])
    }
    let arr1 = arr.slice(0, Math.floor(arr.length / 2) + 1)
    let arr2 = arr.slice(Math.floor(arr.length / 2), arr.length)
    console.log(arr1, arr2);
    return Math.min(bestNearPoint(arr1), bestNearPoint(arr2))

}

console.log(bestNearPoint(arr));