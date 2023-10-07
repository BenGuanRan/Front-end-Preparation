function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    if (prerequisites.length === 0) return true
    // if (new Set(prerequisites.flat()).size !== numCourses) return false
    const inOuts = new Array(numCourses).fill(0).map(i => {
        return {
            in: 0,
            out: new Array<number>()
        }
    })
    const queue = new Array<any>()
    prerequisites.forEach(([x, y]) => {
        inOuts[x].in++
        inOuts[y].out.push(x)
    })
    for (let i = 0; i < inOuts.length; i++) {
        // 先找到一个入度为0的点
        if (inOuts[i].in === 0) {
            // 将其出度点入读均减1
            queue.push(inOuts[i])
        }
    }
    let count = 0

    console.log(queue);
    while (queue.length) {
        console.log(queue);

        let node = queue.shift()
        count++
        node.out.forEach((i: number) => {
            inOuts[i].in--
            if (inOuts[i].in === 0) {
                queue.push(inOuts[i])
            }
        })
    }
    return count === numCourses
}



console.log(canFinish(5, [[1, 4], [2, 4], [3, 1], [3, 2]]));

