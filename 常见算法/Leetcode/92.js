/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (head.next === null) return head
    let p = head
    let before = null
    let after = null
    let flag = false
    let arr = []
    let count = 0
    // 遍历链表，寻找before、after
    while (p) {
        count++
        if (count === left - 1) before = p
        if (count === left) {
            flag = true
        }
        while (flag) {
            arr.push(p.val)

            if (count === right) {
                after = p.next
                flag = false
                break
            }
            count++
            p = p.next

        }
        p = p.next
    }
    let a = before
    if (before === null)
        before = new ListNode('', head)
    console.log(arr, before, after);
    let b = before
    while (true) {
        b.next = new ListNode(arr.pop(), null)
        if (!arr.length) {
            b.next.next = after
            break
        }
        b = b.next
    }
    console.log(count);
    return a === null ? before.next : head
};