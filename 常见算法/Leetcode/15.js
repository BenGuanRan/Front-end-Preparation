// 排序＋双指针
var threeSum = function (nums) {
    // 先对数组排序
    const res = []
    nums = nums.sort((a, b) => a - b)
    let l = 0
    while (nums[l] <= 0) {
        // 若当前数值大于0，则加下来选取两个数必然大于0，因此退出循环
        let c = l + 1
        let r = nums.length - 1
        while (c < r) {
            let count = nums[l] + nums[c] + nums[r]
            if (count === 0) {
                // 判断当前数组中是否已经存在
                if (!res.includes([nums[l], nums[c], nums[r]].toString()))
                    res.push([nums[l], nums[c], nums[r]].toString())
                c++
                r--
            } else if (count > 0) {
                // 数值太大，r左移
                r--
            } else {
                // 数值太小，c右移
                c++
            }
        }
        l++
    }
    return res.map(i => i.split(',').map(s => Number(s)))
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));