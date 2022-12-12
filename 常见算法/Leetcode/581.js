/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    let l = 0, r = nums.length - 1
    let res = [0, 0]
    let f1 = 0, f2 = 0
    // 先从左往右查
    while (l < nums.length && f1 === 0) {
        if (nums[l] > nums[l + 1]) {
            res[0] = l
            f1 = 1
        }

        !f1 && l++
    }
    if (l > 1) {
        // 从右往左查
        while (r >= l && f2 === 0) {
            if (nums[r] < nums[r - 1]) {
                res[1] = r
                f2 = 1
            }

            !f2 && r--
        }
    } else {
        // 从右往左查
        while (r >= l && f2 === 0) {
            if (nums[r] <= nums[r - 1]) {
                res[1] = r
                f2 = 1
            }

            !f2 && r--
        }
    }

    // return res[0] - res[1] === 0 ? 0 : res[1] - res[0] + 1
    return res
};



console.log(findUnsortedSubarray([1, 3, 2, 3, 3]));