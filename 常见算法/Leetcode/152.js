/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    // max，min分别记录当前最大和最小的乘积，分别用于正负数
    let max = nums[0]
    let min = nums[0]
    let res = nums[0]
    let mx = undefined
    let mn = undefined
    for (let i = 1; i < nums.length; i++) {
        mx = nums[i] * max
        mn = nums[i] * min
        max = Math.max(mx, mn, nums[i])
        min = Math.min(mx, mn, nums[i])
        res = Math.max(res, max)
    }
    return res
};
// console.log(maxProduct([2, 3, -2, 4]));