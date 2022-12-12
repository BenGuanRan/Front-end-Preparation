/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const l = matrix.length
    // 交换数组的两项
    function change(x1, y1, x2, y2) {
        let tmp = matrix[x1][y1]
        matrix[x1][y1] = matrix[x2][y2]
        matrix[x2][y2] = tmp
    }
    // 1. 先左右镜像对称
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < Math.floor(l / 2); j++) {
            change(i, j, i, l - 1 - j)
        }
    }
    // 2. 再中心对称
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l - i - 1; j++) {
            change(i, j, l - 1 - j, l - 1 - i)
        }
    }
    return matrix
};

// console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));