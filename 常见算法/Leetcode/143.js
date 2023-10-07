/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    // 寻找中间节点
    let r = null, fast = head, low = head, l = head, prevnode = null
    while (fast && fast.next) {
        prevnode = low
        fast = fast.next.next
        low = low.next
    }
    r = low
    prevnode.next = null
    // 反转r指向的链表
    let prev = null, ptr = r
    while (ptr) {
        const t = ptr.next
        ptr.next = prev
        prev = ptr
        ptr = t
    }
    r = prev
    // 合并l,r指向的链表
    let p1 = l, p2 = r, nh = new ListNode(0, null), p = nh
    while (p1) {
        p.next = p1
        p.next.next = p2
        p = p.next.next
        p1 = p1.next
        p2 = p2.next
    }
    if (p2)
        p.next = p2
    return nh.next

};