
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 由于我们最多可以完成两笔交易，因此在任意一天结束之后，我们会处于以下五个状态中的一种：
    // 未进行过任何操作；
    // 只进行过一次买操作； b1
    // 进行了一次买操作和一次卖操作，即完成了一笔交易； s1
    // 在完成了一笔交易的前提下，进行了第二次买操作； b2
    // 完成了全部两笔交易。 s2
    // 初始状态
    let b1 = -prices[0]
    let s1 = 0
    let b2 = -prices[0]
    let s2 = 0
    for (let i = 1; i < prices.length; i++) {
        b1 = Math.max(- prices[i], b1)
        s1 = Math.max(s1, b1 + prices[i])
        b2 = Math.max(s1 - prices[i], b2)
        s2 = Math.max(s2, b2 + prices[i])
    }
    return s2
};

// console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
