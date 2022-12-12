/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // 快慢指针，快指针fast每次移动两个格子，慢指针slow每次移动一个格子。
    let slow = head
    // 让快指针先行一步
    if (!head) return false
    let fast = head.next
    while (fast && fast !== slow) {
        if (!fast.next) return false
        fast = fast.next.next
        slow = slow.next
    }
    if (!fast)
        // 证明没有环，快指针走到终点
        return false
    else
        // 证明有环，快指针追上满指针
        return true
};
