/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    // 动态规划
    const h = grid.length
    const w = grid[0].length
    const res = new Array(h).fill(0).map(i => [...new Array(h).fill(0)])  //生成一个二维数组， 每一格记录当前最短路径
    // 初始化格子边界
    res[0][0] = grid[0][0]
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (i === 0 && j === 0) {
                continue
            }
            if (i === 0) {
                res[i][j] = res[i][j - 1] + grid[i][j]
                continue
            }
            if (j === 0) {
                res[i][j] = res[i - 1][j] + grid[i][j]
                continue
            }

            let leftVal = res[i][j - 1]
            let topVal = res[i - 1][j]
            res[i][j] = Math.min(leftVal, topVal) + grid[i][j]
        }
    }
    return res[h - 1][w - 1]
};

// console.log(minPathSum([[1, 2, 3], [4, 5, 6]]));