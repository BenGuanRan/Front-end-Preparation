
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


function inorderTraversal(root: TreeNode | null): number[] {
    const res: Array<number> = []
    function travel(node: TreeNode | null): void {
        if (node === null) return
        travel(node.left)
        res.push(node.val)
        travel(node.right)
    }
    travel(root)
    return res
};