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
var isValidBST = function(root) {
    // 中序遍历一下
    const res = [true, -Infinity]
    function travel(node) {
        if(!node) return 
        travel(node.left)
        res.push(node.value)
        if(res[res.length-1] < res[res.length-2]) {
            res[0] = false
            return 
        }
        travel(node.right)
    }
    travel(root)
    console.log(res);
    return res[0]
};