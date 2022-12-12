/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    // 先将链表节点存入数组中
    const arr: Array<ListNode> = []
    let p = head, count = 0
    while (p) {
        count++
        arr.push(p)
        p = p.next
    }
    const index = arr.length - k % count
    let resHead = arr[index], l: null | ListNode = resHead
    for (let i = index + 1; i < arr.length; i++) {

        l.next = arr[i]
        l = l.next
    }
    for (let i = 0; i < index; i++) {
        if (i === index - 1)
            arr[i].next = null
        l.next = arr[i]
        l = l.next
    }
    return resHead ? resHead : null
};
