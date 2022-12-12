/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    let m = l + Math.floor((r - l) / 2)
    while (l < r) {
        if (nums[l] > nums[m]) {
            if (nums[r] >= target && nums[m + 1] <= target) {
                l = m + 1
                m = l + Math.floor((r - l) / 2)
                continue
            } else {
                r = m
                m = l + Math.floor((r - l) / 2)
                continue
            }
        } else if (nums[m + 1] > nums[r]) {
            console.log(nums[m + 1], nums[r]);
            if (nums[m] >= target && nums[l] <= target) {
                r = m
                m = l + Math.floor((r - l) / 2)
                continue
            } else {
                l = m + 1
                m = l + Math.floor((r - l) / 2)
                continue
            }
        } else {
            if (nums[m] >= target && nums[l] <= target) {
                r = m
                m = l + Math.floor((r - l) / 2)
                continue
            } else {
                l = m + 1
                m = l + Math.floor((r - l) / 2)
                continue
            }
        }
        // if (nums[l] <= target && nums[r] >= target) {
        //     if (nums[l] == target)
        //         return l
        //     if (nums[r] == target)
        //         return r
        // }
    }
    return nums[l] == target ? l : -1
};
