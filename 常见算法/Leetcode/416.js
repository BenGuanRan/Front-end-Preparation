/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    // 可以看成一个01背包问题
    // dp[i][j] 表示前i个数是否能装满 容量为j的背包
    const sum = nums.reduce((ps, cr) => {
        return ps + cr
    }, 0)
    if (!Number.isInteger(sum / 2))
        return false
    // 构造数组
    const len = nums.length, dp = Array.from({ length: len + 1 }).map(
        () => Array(sum / 2 + 1).fill(0)
    );
    //dp数组初始化，dp[..][0] = true表示背包容量为0，这时候就已经装满了，
    //dp[0][..] = false 表示没有物品，肯定装不满
    for (let i = 0; i <= len; i++) {
        dp[i][0] = 1
    }
    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= sum / 2; j++) {
            if (j - nums[i - 1] < 0) {
                // 说明容量不足，能否恰好装下只能取决于前面的值
                dp[i][j] = dp[i - 1][j]
            } else {
                // 说明可以放可以不放
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
            }
        }
    }
    return Boolean(dp[len][sum / 2])
};
// console.log(canPartition([1, 5, 11, 5]));