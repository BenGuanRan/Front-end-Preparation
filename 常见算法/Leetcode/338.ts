// function countBits(n: number): number[] {
//     const res = new Array(n + 1).fill(0)
//     for (let i = 0; i <= n; i++) {
//         let num = i
//         while (num) {
//             num &= (num - 1)
//             res[i]++
//         }
//     }
//     return res
// }; 

function countBits(n: number): number[] {
    // 动态规划
    const dps = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        dps[i] = dps[i & (i - 1)] + 1
    }
    return dps
};
console.log(countBits(2));
