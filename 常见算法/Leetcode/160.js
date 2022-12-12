var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;//链表A循环结束就循环链表B	
        pB = pB === null ? headA : pB.next;//链表A循环结束就循环链表B	
    }
    return pA;//当pA == pB时就是交点
};