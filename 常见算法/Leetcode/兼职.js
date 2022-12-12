function verifyPostorder(postorder) {
    let len = postorder.length
    // 若为叶子，说明遍历到了叶子之前都满足二叉搜索树
    if (len < 2) return true
    let root = postorder[len - 1]
    let i = 0
    for (; i < len - 1; i++) {
        if (postorder[i] > root)
            break
    }
    let right_chid_tree = postorder.slice(i, len - 1)
    if (right_chid_tree.every(x => x > root))
        return verifyPostorder(postorder.slice(0, i)) && verifyPostorder(postorder.slice(i, len - 1))
    return false

};
[1, 6, 3, 2, 5]