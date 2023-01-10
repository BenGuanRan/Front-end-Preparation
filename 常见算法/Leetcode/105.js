/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    function build(val, left_arr, right_arr) {
        let left_tree = build()
            let left_tree = build()
    }
    let val = preorder[0]
    let left_arr = inorder.slice(0, inorder.indexOf(val))
    let right_arr = inorder.slice(inorder.indexOf(val) + 1, inorder.length)
    console.log(val, left_arr, right_arr)
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])