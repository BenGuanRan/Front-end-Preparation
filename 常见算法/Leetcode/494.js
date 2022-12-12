/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    // 01背包问题
    // dp[i][j]代表前i个数正负变化是否恰好能"装满"容量为j的数的最大种类
    // 数值大小从-sum到+sum
    // 初始化
    const i_len = nums.length,
        sum = (nums.reduce((a, b) => a + b, 0)),
        j_len = sum * 2 + 1, // 表示[-sum,+sum]的区间长度
        dp = Array.from({ length: i_len + 1 }).map(_ => Array(j_len).fill(0))
    // 容量为j的数的值为j-sum
    // 初始化
    // 因为值为-sum也就是j为0时，只有i种方案
    let s = 0
    for (let i = 1; i <= i_len; i++) {
        s += nums[i - 1]
        dp[i][s + sum] = 1
        dp[i][sum - s] = 1
    }
    // 开始状态转移
    for (let i = 1; i <= i_len; i++) {
        for (let j = 1; j <= target + sum; j++) {
            dp[i][j] = dp[i - 1][j - nums[i - 1]] + dp[i - 1][j + nums[i - 1]]
        }
    }
    return dp
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));