function fun(arr) {
    const colNums = arr[0].length
    const rawNums = arr.length
    let res = 0
    function check(x, y) {
        // 用来检查边界条件
        if (x < 0 || x > rawNums - 1 || y < 0 || y > colNums - 1 || arr[x][y] === 0) {
            return false
        } else
            return true
    }

    function dfs(x, y) {
        if (check(x, y)) {
            arr[x][y] = 0
            dfs(x - 1, y)
            dfs(x, y - 1)
            dfs(x + 1, y)
            dfs(x, y + 1)
        } else {
            return
        }
    }
    for (let i = 0; i < rawNums; i++) {
        for (let j = 0; j < colNums; j++) {
            if (arr[i][j] != 0) {
                dfs(i, j)
                res++
            }
        }
    }
    dfs(0, 0)
    return res
}

console.log(fun([
    [1, 1, 1],
    [0, 1, 1],
    [1, 0, 1]
]));