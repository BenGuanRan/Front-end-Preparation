/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // 动态规划，当前位置存放以当前字符结尾的，最长子串的长度
    let template = '' // 记录当前子串
    let prev = 0 // 记录上一个前一个长度，用来压缩空间
    let res = 0 // 记录结果
    for (let i of s) {
        let sce = template.indexOf(i)
        if (sce !== -1) {
            template = template.slice(sce+1)+i
            prev += (1 - (sce - 0 + 1))
        } else {
            template += i
            prev += 1
        }
        res = Math.max(prev, res)
    }
    return res
};


// console.log(lengthOfLongestSubstring("abcabcbb"));