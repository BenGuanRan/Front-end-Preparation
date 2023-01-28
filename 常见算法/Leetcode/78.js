/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = new Map()
    function findChildSet(arr) {
        let len = arr.length
        res.set(arr.toString(), arr)
        if (len === 1)
            return
        for (let i = 0; i < len; i++) {
            let t = [...arr]
            t.splice(i, 1)
            findChildSet(t)
        }

    }
    findChildSet(nums)
    let p = [[]]
    for (let i of res) {
        p.push(i[1])
    }
    return p
};
console.log(subsets([1, 2, 3, 4]));