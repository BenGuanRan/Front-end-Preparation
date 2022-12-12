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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    const hashmap: Map<TreeNode, TreeNode | null> = new Map() // 用来存储各个节点的父亲节点
    function travel(node: TreeNode | null): void {
        if (node === null) return
        if (node.left !== null) hashmap.set(node.left, node)
        if (node.right !== null) hashmap.set(node.right, node)
        travel(node.left)
        travel(node.right)
    }
    travel(root)
    // 构造完成
    // 节点p向上走，记录轨迹
    const traceP: Array<TreeNode | null> = []
    let nowNode: TreeNode | null = p
    traceP.push(nowNode)
    while (nowNode !== null && hashmap.has(nowNode)) {
        let node = hashmap.get(nowNode)

        if (node) {
            nowNode = node
            traceP.push(nowNode)
        }

        else
            nowNode = null
    }
    console.log(traceP);
    nowNode = q
    if (traceP.includes(nowNode))
        return nowNode
    while (nowNode !== null && hashmap.has(nowNode)) {

        let node = hashmap.get(nowNode)
        if (node)
            nowNode = node
        else
            nowNode = null
        if (traceP.includes(nowNode))
            return nowNode
    }
    return null
};