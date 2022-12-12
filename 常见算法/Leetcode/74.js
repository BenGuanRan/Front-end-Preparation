/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function (matrix, target) {
//     // 二分先找行号
//     const m = matrix.length, n = matrix[0].length
//     let t = 0, b = m - 1, r1 = undefined
//     while (t <= b) {
//         let c = Math.floor((t + b) / 2)
//         if (matrix[c][n - 1] >= target && matrix[c][0] <= target) {
//             // 说明找到了列号
//             r1 = c
//             break
//         } else if (matrix[c][n - 1] <= target) {
//             // 向下移动
//             t = c + 1
//         } else {
//             b = c - 1
//         }
//     }
//     if (r1 === undefined) return false

//     // 在指定行号中再次寻找
//     let l = 0, r = n - 1
//     while (l <= r) {
//         let c = Math.floor((l + r) / 2)
//         if (matrix[r1][c] === target) {
//             return true
//         } else if (matrix[r1][c] <= target) {
//             // 向右移动
//             l = c + 1
//         } else {
//             r = c - 1
//         }
//     }
//     return matrix[r1][l] === target

// };


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    return matrix.some(i=>i.includes(target))
};
console.log(searchMatrix([[1]], 1));