class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function kthSmallest(root: TreeNode | null, k: number): number {
    const stack: TreeNode[] = []
    while (root) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop() as TreeNode
        --k
        if (k === 0) {
            break
        }
        root = root.right
    }
    return root!.val
};