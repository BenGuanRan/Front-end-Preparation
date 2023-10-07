function rob(nums: number[]): number {
    const defs = [~~nums[0], Math.max(~~nums[0], nums[1])]
    const len = nums.length
    for (let i = 2; i < len; i++) {
        defs[i] = Math.max(defs[i - 1], nums[i] + defs[i - 2])
    }
    return defs[len - 1]

};

console.log(rob([1, 2, 3, 1]));

