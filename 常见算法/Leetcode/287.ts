// function findDuplicate(nums: number[]): number {
//     for (let i of nums) {
//         const index = Math.abs(i)
//         if (i < 0) return index
//         nums[index] = -nums[index]
//     }
//     return 0
// };

// 快慢指针

function findDuplicate(nums: number[]): number {
    let i = 0, j = 0, k = 0
    while (true) {
        if (nums[i] === nums[j] && i != j) {
            return nums[i]
        }
        i = (i + 1) % nums.length
        j = nums[j] % nums.length
        // console.log(i, j);
    }
};

console.log(findDuplicate([1, 3, 4, 2, 2]));



