var middleNode = function (head) {
    slow = fast = head;
    while (fast && fast.next) {//快慢指针遍历，直到快指针到达最后
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};