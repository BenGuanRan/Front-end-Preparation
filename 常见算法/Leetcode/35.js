/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let l = 0, r = nums.length - 1 // 左右指针
    while (l <= r) {
        let m = Math.floor((r + l) / 2)
        if (nums[m] === target)
            return m
        else if (nums[m] > target) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    return l
};

// console.log(searchInsert([1, 3, 5, 6], 2));