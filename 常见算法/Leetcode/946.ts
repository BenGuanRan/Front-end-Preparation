function validateStackSequences(pushed: number[], popped: number[]): boolean {
    let res: Array<number | undefined> = []
    res.push(pushed.shift())
    while (pushed.length > 0) {
        if (res[res.length - 1] === popped[0]) {
            popped.shift()
            res.pop()
            continue
        }
        res.push(pushed.shift())
    }

    return res.reverse().toString() === popped.toString()
};

// console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
