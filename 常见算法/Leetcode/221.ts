function maximalSquare(matrix: string[][]): number {
    const rows = matrix.length, cols = matrix[0].length
    const dps = new Array(rows).fill(0).map(i => new Array(cols).fill(0))
    let max = 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    dps[i][j] = 1
                } else {
                    dps[i][j] = Math.min(dps[i - 1][j - 1], dps[i - 1][j], dps[i][j - 1]) + 1
                }
                max = Math.max(max, dps[i][j])
            }
        }
    }
    console.log(dps);


    return max * max
};

// console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]));
