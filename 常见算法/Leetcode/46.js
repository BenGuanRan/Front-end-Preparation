/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = []
    // 递归，返回条件是 idx>=nums.length
    // 参数是 nowArr当前的排列， idx当前数字的序号
    function dfs(nowArr, idx) {
        if (idx >= nums.length) {
            return res.push(nowArr)
        }
        // 对于当前的排列，插入后边的数，有nowArr个空位，因此需要插nowArr.length+1次
        for (let i = 0; i < nowArr.length + 1; i++) {
            let a = [...nowArr]
            a.splice(i, 0, nums[idx])
            dfs(a, idx + 1)
        }
    }
    dfs([], 0)
    return res
};
// console.log(permute([1, 2, 3]));