function threeSumClosest(nums: number[], target: number): number {
    const len = nums.length
    let val = +Infinity, sum = 0
    nums.forEach((t, index) => {
        for (let i = index + 1; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                let cur_sum = t + nums[i] + nums[j], cur_val = Math.abs(cur_sum - target)
                if (cur_val < val) {
                    val = cur_val
                    sum = cur_sum
                }
            }
        }
    })
    return sum
};