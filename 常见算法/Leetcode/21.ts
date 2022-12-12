// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let p1 = list1, p2 = list2
    let resList: ListNode | null = null
    let p: ListNode | null = new ListNode()
    if (!p1) return p2;
    if (!p2) return p1
    while (p1 && p2) {
        let val = p1.val > p2.val ? p2.val : p1.val
        if (p1.val > p2.val) {
            p2 = p2.next
        } else {
            p1 = p1.next
        }
        if (!resList) {
            resList = new ListNode(val, null)
            p = resList
        } else {
            p.next = new ListNode(val, null)
            p = p.next
        }
    }
    p1 === null ? p.next = p2 : p.next = p1
    return resList
};