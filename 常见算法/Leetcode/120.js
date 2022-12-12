/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    // 动态规划
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < 1 + i; j++) {
            if (triangle[i - 1][j] === undefined)
                triangle[i][j] = triangle[i][j] + triangle[i - 1][j - 1]
            else if (triangle[i - 1][j - 1] === undefined)
                triangle[i][j] = triangle[i][j] + triangle[i - 1][j]
            else
                triangle[i][j] = Math.min(triangle[i][j] + triangle[i - 1][j], triangle[i][j] + triangle[i - 1][j - 1])
        }
    }
    return Math.min(...triangle[triangle.length - 1])
};
                            // console.log(minimumTotal([[-10]]));