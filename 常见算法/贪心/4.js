const nums = [0]
//3 5 4 

var canJump = function (nums) {
    if(nums.length === 1)
    return 0
    let count = 0
    const n = nums.map((i, j) => i + j + 1)
    let max = n[0], i = 0

    while (1) {
        if (max >= n.length) {
            return ++count
        }
        max = Math.max(...n.slice(0, n[i]))
        i = n.slice(0, n[i]).lastIndexOf(max)
        count++
    }
    return count
};

console.log(canJump(nums));