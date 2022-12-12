const s = [1, 3, 0, 5, 3, 5, 6, 8, 8, 2, 12]
const e = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

function solve(s, e) {
    // 截至活动小到大排序
    e.sort((a, b) => a - b)
    let flag = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= e[flag])
            flag = i

        console.log(flag+1);
    }
}
solve(s, e)