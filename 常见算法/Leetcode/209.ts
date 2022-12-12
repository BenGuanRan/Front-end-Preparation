function minSubArrayLen(target: number, nums: number[]): number {
    let res = +Infinity, l = 0, r = 0, sum = nums[0]
    while (l <= nums.length - 1 && r - l + 1 <= nums.length) {
        if (sum >= target) {
            res = Math.min(r - l + 1, res)
            sum -= nums[l++]

        } else {
            sum += nums[++r]
        }
    }
    return res === Infinity ? 0 : res
};

// console.log(minSubArrayLen(4, [2,3,1,2,4,3]));
