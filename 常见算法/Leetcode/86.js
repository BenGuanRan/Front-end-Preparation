/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let p = head
    let h1 = new ListNode('l', null)
    let p1 = h1
    let h2 = new ListNode('r', null)
    let p2 = h2
    while (p) {
        if (p.val < x) {
            p1.next = new ListNode(p.val, null)
            p1 = p1.next
        } else {
            p2.next = new ListNode(p.val, null)
            p2 = p2.next
        }
        p = p.next
    }
    p1.next = h2.next
    return h1.next
};