const prices = [1,1]
var maxProfit = function (prices) {
        // 去重
        p = []
        p.push(prices[0])
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] !== p[p.length-1])
                p.push(prices[i])
        }
        prices = p
        let l = prices.length
        if (l === 1) {
            return 0
        }
        prices.unshift(Infinity)
        prices.push(-Infinity)
        let sum = 0
        for (let i = 1; i <= l; i++) {
            // 极小值
            if (prices[i - 1] > prices[i] && prices[i] < prices[i + 1]) {
                sum -= prices[i]
            }
            // 极大值
            if (prices[i - 1] < prices[i] && prices[i] > prices[i + 1]) {

                sum += prices[i]

            }
        }
        return sum
};

console.log(maxProfit(prices));

