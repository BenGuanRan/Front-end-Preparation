function searchMatrix(matrix: number[][], target: number): boolean {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] > target) return false
        if (matrix[i].includes(target)) return true
    }
    return false
};