class Stack {
    constructor(arr) {
        this.items = {}
        this.count = 0
        arr.forEach((item, i) => {
            this.push(item)
        })
    }
    pop() {
        if (this.isEmpty()) return undefined
        this.count--
        const res = this.items[this.count]
        delete this.items[this.count]
        return res
    }
    push(element) {
        this.items[this.count++] = element
    }
    peek() {
        if (this.isEmpty()) return undefined
        return this.items[this.count - 1]
    }
    isEmpty() {
        return this.count === 0
    }
    size() {
        return this.count
    }
    clear() {
        this.items = {}
        this.count = 0
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`; // {1}
        for (let i = 1; i < this.count; i++) { // {2}
            objString = `${objString},${this.items[i]}`; // {3}
        }
        return objString;
    }
}

const s = new Stack([1, 2, 3])
s.push(1)
s.pop()
console.log(s.peek());