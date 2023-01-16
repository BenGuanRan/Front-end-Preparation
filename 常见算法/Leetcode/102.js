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
var levelOrder = function (root) {
    if (!root) return []
    const res = []
    const queue = []
    queue.push(root)
    while (queue.length) {
        // 获取该层节点数
        let n = queue.length
        let t = []
        for (let i = 0; i < n; i++) {
            let node = queue.shift()
            t.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(t)
    }
    return res
};