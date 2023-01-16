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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root) return []
    const stack = [], res = []
    let cur = root
    while(stack.length||cur) {
        if(cur) {
            console.log(cur.val);
            stack.push(cur)
            // 向左遍历
            cur = cur.left
        }
        else {
            cur = stack[stack.length-1]
            res.push(cur.val)
            stack.pop()
            cur = cur.right
        }
    }
    console.log(res);
    return res
    
};