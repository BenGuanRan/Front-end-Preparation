/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    let res1 = 0
    // 从2等分开始试
    for (let i = 2; i <= n; i++) {
        let num = Math.ceil(n / i)
        let nowRes = 1
        for (let j = 0; j < i; j++) {
            if (j === i - 1) {
                nowRes *= n - (i - 1) * num
                break
            }
            nowRes *= num
        }
        res1 = Math.max(res1, nowRes)
    }

    let res2 = 0
    // 从2等分开始试
    for (let i = 2; i <= n; i++) {
        let num = Math.floor(n / i)
        let nowRes = 1
        for (let j = 0; j < i; j++) {
            if (j === i - 1) {
                nowRes *= n - (i - 1) * num
                break
            }
            nowRes *= num
        }
        res2 = Math.max(res2, nowRes)
    }
    return Math.max(res1, res2)
};

// console.log(integerBreak(10));