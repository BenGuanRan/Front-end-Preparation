/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    const find = (nums, l, r, target) => {
        let m = Math.floor((l + r) / 2)
        if (nums[m] === target)
            return m
        else if (l > r)
            return l
        else if (nums[m] > target)
            return find(nums, l, m - 1, target)
        else
            return find(nums, m + 1, r, target)

    }
    return find(nums, 0, nums.length - 1, target)
};

// console.log(searchInsert([1, 3, 5, 6], 8));