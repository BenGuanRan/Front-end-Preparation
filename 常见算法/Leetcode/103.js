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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return null
    const res = [], queue = []
    let count = 1 // 记录层数
    res.push(root)
    while (queue.length) {
        let size = queue.length
        let t = []
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            if (count % 2 === 1) {
                t.push(node.val)
            } else {
                t.unshift(node.val)
            }
        }
        res.push(t)
        count++
    }
    return res
};