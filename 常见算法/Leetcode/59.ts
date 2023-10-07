function generateMatrix(n: number): number[][] {
    // 定义边界
    let l = 0, r = n - 1, u = 0, d = n - 1, count = 1
    // 空数组
    const res = new Array(n).fill(0).map(i => new Array(n).fill(0))
    while (true) {
        for (let i = l; i <= r; i++) res[u][i] = count++
        if (++u > d) break
        for (let i = u; i <= d; i++) res[i][r] = count++
        if (--r < l) break
        for (let i = r; i >= l; i--) res[d][i] = count++
        if (--d < u) break
        for (let i = d; i >= u; i--) res[i][l] = count++
        if (++l > r) break
    }
    return res
};

