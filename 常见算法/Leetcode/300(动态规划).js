/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // 最长增长子序列问题
    // dps[i]代表以nums[i]为结尾的最长上升子序列的长度(nums[i]必须被选取)
    const dps = new Array(nums.length).fill(1)
    let res = 1
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) // 证明增长字串增加一个
                dps[i] = Math.max(dps[j] + 1, dps[i])
        }
        res = Math.max(dps[i], res)
    }
    return res
};