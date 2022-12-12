function twoSum(numbers: number[], target: number): number[] {
    // 双指针问题
    let l = 0, r = numbers.length - 1
    while (l < r) {
        if (numbers[l] + numbers[r] > target) {
            r--
        } else if (numbers[l] + numbers[r] < target) {
            l++
        } else {
            break
        }
    }
    return [l + 1, r + 1]
};
// console.log(twoSum([2, 3, 4], 6));
