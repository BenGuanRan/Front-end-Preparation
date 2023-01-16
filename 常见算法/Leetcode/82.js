/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let p = head
    let res = new Map()
    while (p !== null) {
        if (res.has(p.val))
            res.set(p.val, false)
        else {
            res.set(p.val, true)
        }
        p = p.next
    }
    let h = new ListNode('-', null)
    let pr = h
    for (let item of res) {
        if (item[1]) {
            pr.next = new ListNode(item[0], null)
            pr = pr.next
        }

    }
    return h.next
};
