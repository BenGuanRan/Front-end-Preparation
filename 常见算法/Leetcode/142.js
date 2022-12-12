/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // 快慢指针，快指针fast每次移动两个格子，慢指针slow每次移动一个格子。
    let slow = fast = head
    while (fast) {
        if (!fast.next) return null
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            fast = head
            while (fast !== slow) {
                fast = fast.next
                slow = slow.next
            }
            return fast
        }
    }
};