function sortArrayByParityII(nums: number[]): number[] {
    let l = 0, r = nums.length - 1
    while (l < nums.length && r >= 0) {
        if ((nums[l] % 2) === 0)
            l += 2
        if ((nums[r] % 2) !== 0)
            r -= 2
        if ((nums[l] % 2) !== 0 && (nums[r] % 2) === 0 && l < nums.length && r >= 0) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l += 2
            r -= 2
        }

    }
    return nums
};

// console.log(sortArrayByParityII([4, 2, 5, 7]));

