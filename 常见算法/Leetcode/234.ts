class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function isPalindrome(head: ListNode | null): boolean {
    let p = head
    const stack: number[] = []
    while (p) {
        stack.push(p.val)
        p = p.next
    }

    return stack.join("") === stack.reverse().join("")
};