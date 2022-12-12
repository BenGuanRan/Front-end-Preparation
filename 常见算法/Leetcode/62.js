/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const dps = new Array(m).fill(0).map(() => {//这里不能将fill(0)删除
        return new Array(n).fill(0)
    });
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 边界情况 i=0 或j = 0时
            if (i == 0 || j == 0) dps[i][j] = 1
            // 非边界点情况
            else dps[i][j] = dps[i - 1][j] + dps[i][j - 1]
        };
    } return dps[m - 1][n - 1]
}
console.log(uniquePaths(3, 7));