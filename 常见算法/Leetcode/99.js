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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    const nums = []
    // 中序遍历
    const tarvel = (root) => {
        if (root) {
            tarvel(root.left)
            nums.push(root.val)
            tarvel(root.right)
        }
    }
    // 找到差异的两个值
    const find = (nums) => {
        const t = []
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                t.push([nums[i], nums[i + 1]])
            }
        }
        if (t.length === 1) return t[0]
        else return [t[0][0], t[1][1]]
    }
    // 再次遍历进行交换
    const exchange = (root, count, x, y) => {
        if (count === 0) return
        if (root) {
            if (root.val === x || root.val === y) {
                root.val = root.val === x ? y : x
                count--
            }
            exchange(root.left, count, x, y)
            exchange(root.right, count, x, y)
        }
    }

    tarvel(root)
    const [x, y] = find(nums)
    exchange(root, 2, x, y)
    return root
};