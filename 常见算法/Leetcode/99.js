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

function swap(arr) {
    console.log(arr , 111)
    // let t = arr[0].val
    // arr[0].val = arr[1].val
    // arr[1].val = t
}

var recoverTree = function(root) {
    let stack = [], cur = root, lastNode = {val:-Infinity}, nodeArr = [] 
    while(cur||stack.length) {
        if(cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack[stack.length-1]
            if(lastNode.val>cur.val) {
                if(nodeArr.length === 0) {
                    nodeArr.push(lastNode)
                } else if(nodeArr.length === 1) {
                    nodeArr.push(cur)
                } else {
                    
                }
                
            }
            lastNode = cur
            stack.pop()
            cur = cur.right
        }
        
    }
    swap(nodeArr)
    return root
    // return root
};