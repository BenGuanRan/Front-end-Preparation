/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0, r = nums.length - 1
    while (l <= r) {
        console.log(l, r);
        if (nums[l] < nums[r]) {
            return nums[l]
        }

        let m = Math.floor((l + r) / 2)

        if (nums[m] > nums[l] && nums[m] > nums[r]) {
            // 取右半部分
            l = m
        } else if (nums[m] < nums[l] && nums[m] < nums[r]) {
            // 取左半部分
            r = m
        } else {
            if (l === r) return nums[l]
            else return nums[r]
        }
    }
};

// console.log(findMin([4, 5, 1, 2, 3]));