function _01BagProblem(wight, value, size) {
    // 状态dp[i][j] 表示当背包容量为j时，盛装前i个物品的最大价值
    const len = wight.length,
        dp = Array.from({ length: len + 1 }).map(//初始化dp数组
            () => Array(size + 1).fill(0)
        );
    for (let i = 1; i <= len; i++) {
        for (let j = 0; j < size + 1; j++) {
            if (j - wight[i - 1] < 0) {
                // 表示当前容量过小，装不下第i个
                dp[i][j] = dp[i - 1][j]
            } else {
                // 代表装得下(选择不装或装)
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - wight[i - 1]] + value[i - 1])
            }
        }
    }
    return dp[len][size]
}

console.log(_01BagProblem([1, 3, 4], [15, 20, 30], 4));