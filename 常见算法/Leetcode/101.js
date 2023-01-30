/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    function ifHuiwen(arr) {
        const len = arr.length
        const limit = Math.floor(len / 2)
        for (let i = 0; i < limit; i++) {
            if (arr[i] !== arr[len - 1 - i])
                return false
        }
        return true
    }
    // 层序遍历二叉树
    const queue = [], res = []
    if (root) queue.push(root)
    while (queue.length) {
        let t = []
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let item = queue.shift()
            if (!item) { t.push(null); continue }
            t.push(item.val)
            if (item.left) queue.push(item.left)
            if (item.right) queue.push(item.right)

        }
        res.push(t)
        t = []
    }
    console.log(res)
    return res.every(i => ifHuiwen(i))
};  