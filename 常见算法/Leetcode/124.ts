function maxPathSum(root: TreeNode | null): number {
    let maxSum = -Infinity
    const dfs = (root: TreeNode | null) => {
        if (root === null)
            return 0
        const left = dfs(root.left);   //递归左子树最大路径和
        const right = dfs(root.right); //递归右子树最大路径和
        let sumPath = root.val + Math.max(left, 0, right)
        maxSum = Math.max(maxSum, root.val + left + right)
        return sumPath < 0 ? 0 : sumPath
    }
    dfs(root)
    return maxSum
};