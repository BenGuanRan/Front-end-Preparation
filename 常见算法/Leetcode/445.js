var addTwoNumbers = function(l1, l2) {
    const stack1 = [];
    const stack2 = [];
    while (l1 || l2) {//两链表入栈
        if (l1) {
            stack1.push(l1.val);
            l1 = l1.next;
        }
        if (l2) {
            stack2.push(l2.val);
            l2 = l2.next;
        }
    }
    let carry = 0;
    let ansList = null;
    while (stack1.length || stack2.length || carry !== 0) {//不断出栈
        const s1 = stack1.length ? stack1.pop() : 0;
        const s2 = stack2.length ? stack2.pop() : 0;
        let val = s1 + s2 + carry;
        carry = parseInt(val / 10);//计算进位
        val = val % 10;//计算当前节点的值
        const curNode = new ListNode(val);
        curNode.next = ansList;//向链表前插入新节点
        ansList = curNode;//重新赋值ansList
    }
    return ansList;
};
