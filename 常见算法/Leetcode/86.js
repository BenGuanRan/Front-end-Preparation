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
    let l = new ListNode('-', head)
        // 让l， r分别指向分界线的边界
        , r = head
    let prev = null
    while (l && l.next.val < x) {
        l = l.next
    }
    while (r && r.val < x) {
        prev = r
        r = r.next
    }
    while (r) {
        prev = r
        if (r.val >= x) {
            r = r.next
        } else {
            prev.next = r.next
            let t = l.next
            l.next = new ListNode(r.val, t)
            r = prev.next
        }

    }
    return head
};