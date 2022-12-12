/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
type TreeNode = {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    const search = (root: TreeNode | null) => {
        if (root === null)
            return 0
        if (root.val < low || root.val > high) {
            return search(root.left) + search(root.right)
        } else {
            return search(root.left) + search(root.right) + root.val
        }
    }
    return search(root)
};