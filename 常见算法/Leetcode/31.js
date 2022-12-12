/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function (nums) {
    // 寻找相邻升序对
    let l = nums.length - 2
    let r = nums.length - 1
    while (l >= 0) {
        if (nums[l] < nums[r])
            break
        l--
        r--
    }
    if (l == -1) {
        l++
        r++
        if (nums[l] >= nums[r]) {

            nums = nums.reverse();
            console.log(nums);
            return
        }
    }
    // console.log(l,r);
    let x = nums.length - 1
    while (x >= r) {
        if (nums[x] > nums[l]) {
            // console.log(nums[x] , nums[l]);
            let t = nums[x]
            nums[x] = nums[l]
            nums[l] = t
            // console.log(nums);
            nums = nums.slice(0, l + 1).concat(nums.slice(l + 1, nums.length).sort((a, b) => a - b));
            // console.log(nums);
        }
        x--
    }
    return nums;
};
console.log(nextPermutation([1,3,2]));