function spiralOrder(matrix: number[][]): number[] {
    const res: number[] = []
    // 定义边界
    let u = 0, d = matrix.length - 1, l = 0, r = matrix[0].length - 1
    while (true) {
        for (let i = l; i <= r; i++) res.push(matrix[u][i])
        if (++u > d) break
        for (let i = u; i <= d; i++) res.push(matrix[i][r])
        if (--r < l) break
        for (let i = r; i >= l; i--) res.push(matrix[d][i])
        if (--d < u) break
        for (let i = d; i >= u; i--) res.push(matrix[i][l])
        if (++l > r) break
    }
    return res

};

