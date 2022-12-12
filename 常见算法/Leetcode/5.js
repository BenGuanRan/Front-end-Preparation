// 动态规划
function longestPalindrome(s) {
    const res = []
    // 构造二维数组
    for (let i = 0; i < s.length; i++) {
        let row = []
        for (j = 0; j < s.length; j++) {
            row.push(0)
        }
        res.push(row)
    }
    // 动态规划
    for (let i = s.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            let a = j;
            let b = j + s.length - i
            let str = s.slice(a, b + 1)
            // console.log(a, b);
            if (str.length == 1) {
                res[a][b] = 1
            } else if (str.length == 2 && str[0] == str[1]) {
                res[a][b] = 1
            } else if (str.length > 2 && str[0] == str[str.length - 1] && res[a + 1][b - 1] === 1) {
                res[a][b] = 1
            } else {
                res[a][b] = 0
            }
        }
    }
    // 遍历数组求回文串
    let max = [0, 0, 0]
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (res[i][j] && j - i + 1 > max[2]) {
                max = [i, j, j - i + 1]
            }
        }
    }
    return s.slice(max[0], max[1] + 1)
};

console.log(longestPalindrome('babad'));
