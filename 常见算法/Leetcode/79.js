/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let res = null
    function find(i, j, p, path) {
        path = path.concat(`${i},${j}/`)
        if (p >= word.length) { return res = true }
        let flag = false
        if (board[i + 1] && !path.includes(`${i + 1},${j}`) && board[i + 1][j] === word[p]) { find(i + 1, j, p + 1, path); flag = true }
        if (board[i - 1] && !path.includes(`${i - 1},${j}`) && board[i - 1][j] === word[p]) { find(i - 1, j, p + 1, path); flag = true }
        if (!path.includes(`${i},${j + 1}`) && board[i][j + 1] === word[p]) { find(i, j + 1, p + 1, path); flag = true }
        if (!path.includes(`${i},${j - 1}`) && board[i][j - 1] === word[p]) { find(i, j - 1, p + 1, path); flag = true }
        if (!flag) return
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                find(i, j, 1, '')
            }

        }
    }
    return res ? res : false
};

console.log(exist([["A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"], ["A", "A", "A", "A", "A", "A"]], "AAAAAAAAAAAAAAa"));