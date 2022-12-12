/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0]
    let maxInterest = 0
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i])
        maxInterest = Math.max(maxInterest, prices[i] - minPrice)
    }
    return maxInterest
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));