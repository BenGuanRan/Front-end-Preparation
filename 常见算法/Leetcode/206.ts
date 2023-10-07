/**
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let cur = head, prev = null
    while (cur) {
        let t = cur.next
        cur.next = prev
        prev = cur
        cur = cur.next
    }
    return head
};