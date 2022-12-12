/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = []
    // 当前剩余的值，combine表示当前的路径，idx表示当前在candidates数组的第几位
    // 结束条件1. target<=0 2. idx>=candidates.length(数组全部用完)
    function dfs(target, combine, idx) {
        // 递归截至条件`
        if (target === 0) {
            return res.push(combine)
        }
        if (target < 0 || idx >= candidates.length) {
            return
        }
        // 进行递归，分两种情况
        // 1. 放弃当前数值，往后移动
        dfs(target, combine, idx + 1)
        // 2. 选择当前数值，不移动
        dfs(target - candidates[idx], [...combine, candidates[idx]], idx)
    }
    dfs(target, [], 0)
    return res
};

// console.log(combinationSum([2, 3, 5], 32));