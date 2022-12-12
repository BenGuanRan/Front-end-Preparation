/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    // 采用动态规划
    // dp[0][i] 存放当前第i天交易完成后手里没有股票的最大利润
    // dp[1][i] 存放当前第i天交易完成后手里持有股票的最大利润
    const l = prices.length
    const dp = [new Array(l).fill(-Infinity), new Array(l).fill(-Infinity)]
    dp[0][0] = 0
    dp[1][0] = -prices[0]
    for (let i = 1; i < l; i++) {
        // 导致当前交易过后没有股票的原因有两种，第一种，前一天结束也没有股票，第二种前一天结束有股票
        dp[0][i] = Math.max(dp[0][i - 1], dp[1][i - 1] + prices[i])
        // 导致当前交易过后有股票的原因有两种，第一种，前一天结束没有股票，后买入的，第二种前一天结束有股票
        dp[1][i] = Math.max(dp[0][i - 1] - prices[i], dp[1][i - 1])
    }
    return dp[0].pop();
};

// console.log(maxProfit([7,1,5,3,6,4]));