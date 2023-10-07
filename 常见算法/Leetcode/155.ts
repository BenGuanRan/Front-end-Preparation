class MinStack {
    stack: number[];
    minValue: number;
    constructor() {
        this.stack = []
        this.minValue = +Infinity
    }
    findMin(): void {
        this.minValue = Math.min(...this.stack)
    }
    push(val: number): void {
        this.stack.push(val)
        this.findMin()
    }

    pop(): void {
        this.stack.pop()
        this.findMin()
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.minValue
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
