function numIslands(grid: string[][]): number {
    const rows = grid.length, cols = grid[0].length
    let count = 0
    function find(i: number, j: number) {
        if (i < 0 || i > rows || j < 0 || j > cols || grid[i][j] === '0') return true
        grid[i][j] = '0'
        find(i - 1, j)
        find(i + 1, j)
        find(i, j - 1)
        find(i, j + 1)
        return true
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j] === '1' && find(i, j) && count++
        }
    }
    return count
};

console.log(numIslands([["1", "1", "1", "1", "0"],
["1", "1", "0", "1", "0"],
["1", "1", "0", "0", "0"],
["0", "0", "0", "0", "0"]]));
