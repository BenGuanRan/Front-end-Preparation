function sortArrayByParity(nums: number[]): number[] {
    let l = 0, r = nums.length - 1
    while (r > l) {
        if ((nums[l] % 2) === 0)
            l++
        if ((nums[r] % 2) !== 0)
            r--
        if ((nums[l] % 2) !== 0 && (nums[r] % 2) === 0 && r > l) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++
            r--
        }

    }
    return nums
};

// console.log(sortArrayByParity([0, 1]));

