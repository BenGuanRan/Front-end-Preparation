/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    if (n === 1)
        return ['()']
    const dps = [new Set([''])]
    dps.push(new Set(['()']))

    for (let i = 2; i <= n; i++) {
        let temp = new Set() // 存放当前dps
        for (let p = 0; p <= i - 1; p++) {
            let q = i - 1 - p
            for (let a of dps[p]) {
                for (let b of dps[q]) {
                    temp.add(`(${a})${b}`)
                }
            }
        }
        dps.push(temp)
  
    }
    return [...dps[dps.length-1]]
};

console.log(generateParenthesis(4));
