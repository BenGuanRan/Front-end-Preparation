/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const dps = new Array(amount + 1).fill(0)
    for (let i = 1; i < dps.length; i++) {
        // a用来存放当前状态-所有硬币状态时的状态
        let a = []
        for (let j = 0; j < coins.length; j++) {
            if (dps[i - coins[j]] === -1 || i - coins[j] < 0)
                continue
            a.push(dps[i - coins[j]])
        }
        dps[i] = a.length === 0 ? -1 : Math.min(...a) + 1
    }
    return (dps.pop());
};
console.log(coinChange([1], 0));







/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (amount === 0)
        return amount
    // dps数组记录当前硬币面值凑成总金额的最小硬币数目
    // 状态转移方程dps[i] = dps[i-coins[j]]+1
    const dps = new Array(amount + 1).fill(+Infinity)
    dps[0] = -1
    for (let i = 1; i < amount + 1; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] === 0) {
                dps[i] = 1
                continue
            }
            if (i - coins[j] > 0) {
                if (dps[i - coins[j]] === -1)
                    continue
                dps[i] = Math.min(dps[i - coins[j]] + 1, dps[i])
            }

        }
        if (dps[i] > amount)
            dps[i] = -1
    }
    return dps.pop()
};
// console.log(coinChange([1, 2, 5], 11));