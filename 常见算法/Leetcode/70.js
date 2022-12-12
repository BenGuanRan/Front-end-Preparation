/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1)
        return 1
    if (n === 2)
        return 2
    const res = new Array(n).fill(0)
    res[0] = 1
    res[1] = 2
    for (let i = 2; i < n; i++) {
        if (res[i - 1])
            res[i] += res[i - 1]
        if (res[i - 2])
            res[i] += res[i - 2]
    }
    return res[res.length-1]
};
// console.log(climbStairs(4));