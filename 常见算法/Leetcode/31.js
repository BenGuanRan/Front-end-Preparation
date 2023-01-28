/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    if (nums.length === 2) {
        [nums[0], nums[1]] = [nums[1], nums[0]]
        return nums
    }
    // 寻找较小的数
    let s_i = null, l_i = null
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i + 1] > nums[i]) {
            s_i = i
            break
        }
    }
    if (s_i === null) return nums.sort((a, b) => a - b)
    for (let i = nums.length - 1; i > s_i; i--) {
        if (nums[i] > nums[s_i]) {
            l_i = i
            break
        }
    }
    // 交换
    [nums[s_i], nums[l_i]] = [nums[l_i], nums[s_i]]
    console.log(s_i);
    // 排序s_i+1 - length-1
    for (let i = 0; i < nums.length - s_i - 2; i++) {
        for (let j = s_i + 1; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1])
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        }
    }
    return nums
};

console.log(nextPermutation([5, 4, 7, 5, 3, 2]));
