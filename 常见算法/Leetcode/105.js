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
preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
var buildTree = function (preorder, inorder) {
    const len = preorder.length
    function build(i, l, r) {
        let node_val = preorder[i]
        if (!l.length && r.length) return new TreeNode(preorder[i], null, null)
        if (i >= len) return null
        let l_i = l.length ? ++i : len
        let r_i = r.length ? ++i : len
        let l_index = l.indexOf(preorder[l_i])
        let r_index = r.indexOf(preorder[r_i])
        return new TreeNode(node_val,
            l_index === -1 ? null : build(l_i, l.slice(0, l_index), l.slice(l_index + 1, l.length))
            ,
            r_index === -1 ? null : build(r_i, r.slice(0, r_index), r.slice(r_index + 1, r.length))
        )
    }
    let index = inorder.indexOf(preorder[0])
    return build(0, inorder.slice(0, index), inorder.slice(index + 1, len))
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])