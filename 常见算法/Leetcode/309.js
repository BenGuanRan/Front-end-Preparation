/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 在天结束后都有两个状态，手里有股票has，手里没有股票no_has，二者均表示利润
    let has = -prices[0]
    let no_has = 0
    let freeze = 0 // 冷冻期
    for (let i = 1; i < prices.length; i++) {
        let n = no_has
        let h = has
        no_has = Math.max(n, h + prices[i])
        has = Math.max(h, freeze - prices[i])
        freeze = n
    }
    return no_has
};

// console.log(maxProfit([1, 2, 3, 0, 2]));