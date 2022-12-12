const arr = [7, 4, 1, 2, 9, 6, 5, 8, 3]
// function quickSort(arr) {
//     if (arr.length <= 1) { return arr; }
//     var left = [],
//         right = [],
//         baseDot = 0,
//         base = arr.splice(baseDot, 1)[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < base) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return quickSort(left).concat([base], quickSort(right));
// }


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let left = [], right = [], base = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < base) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([base], quickSort(right))
}


function quickSort(arr) {
    if (arr.length <= 1) return arr
    let left = [], right = [], base = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < base) {
            left.push(arr[i])
        } else {
            right.push(arr[j])
        }
    }
    return quickSort(left).concat([base], quickSort(right))
}
console.log(quickSort(arr));