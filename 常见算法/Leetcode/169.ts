function majorityElement(nums: number[]): number {
    const map = new Map<number, number>()
    for (let i of nums) {
        let val = map.get(i)
        if (val)
            map.set(i, val + 1)
        else
            map.set(i, 1)
    }
    let max = [0, 0]
    for (let item of map) {
        const [x, y] = item
        max = y > max[1] ? [x, y] : max
    }
    return max[0]
};

console.log(majorityElement([6, 5, 5]));
