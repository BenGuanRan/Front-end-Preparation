/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    // 初始化结果数组
    const res = new Array(n + 1).fill(0).map((_, i) => i)
    for (let i = 1; i <= n; i++) {
        for (let j = 1; i - j * j >= 0; j++) {
            res[i] = Math.min(res[i], res[i - j * j] + 1)
        }

    }
    return res.pop()
}
console.log(numSquares(13));