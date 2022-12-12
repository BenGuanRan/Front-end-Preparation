/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    // 是每次找不到就往上升的方向移动
    nums.unshift(-Infinity)
    nums.push(-Infinity)
    let l = 1, r = nums.length - 2
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m - 1] < nums[m] && nums[m] > nums[m + 1])
            return m - 1
        else if (nums[m] < nums[m + 1])
            l = m + 1
        else
            r = m - 1
    }
    return l - 1
};

// console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
