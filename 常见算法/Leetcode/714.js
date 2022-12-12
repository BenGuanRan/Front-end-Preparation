/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    // 两种状态
    let has = -prices[0] - fee // 当前持有股票,在买入股票时，提前扣费
    let no_has = 0 // 当前没有股票
    for (let i = 0; i < prices.length; i++) {
        // let n = no_has
        no_has = Math.max(no_has, has + prices[i])
        has = Math.max(has, no_has - prices[i] - fee)
    }
    return no_has
};

// console.log(maxProfit([1, 3, 7, 5, 10, 3], 3));