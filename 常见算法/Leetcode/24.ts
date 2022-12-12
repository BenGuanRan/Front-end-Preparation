class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function swapPairs(head: ListNode | null): ListNode | null {

    function swapNode(prP: null | ListNode, lP: null | ListNode, rP: null | ListNode): void {
        if (!lP || !rP) return
        if (!prP) {
            // 说明是头节点
            head = rP
            lP.next = rP.next
            rP.next = lP
            return
        }
        prP.next = rP
        lP.next = rP.next
        rP.next = lP
    }
    let prP: null | ListNode = null, lP: any = head, rP: any = head?.next
    while (rP) {
        swapNode(prP, lP, !rP ? null : rP)
        prP = lP || null
        rP = lP?.next?.next || null

        lP = lP?.next || null
    }
    console.log(rP)
    return head
};