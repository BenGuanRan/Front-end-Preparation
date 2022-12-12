/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    // 贪心，将胃口值和饼干从小到大排序
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    let res = 0
    for (let j = 0, i = 0; i < g.length && j < s.length;) {
        if (s[j] >= g[i]) {
            // 能吃下
            j++
            i++
            res++
        } else {
            // 吃不下
            j++
        }
    }
    return res
};


console.log(findContentChildren([1, 2], [1, 2,3]));