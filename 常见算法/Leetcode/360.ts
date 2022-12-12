function intersect(nums1: number[], nums2: number[]): number[] {
    const map: Map<number, number | undefined> = new Map()
    const res: Array<number> = new Array()
    // 先遍历nums1
    for (let i of nums1) {
        if (map.has(i)) {
            let val = map.get(i)
            val = val === undefined ? 0 : val
            map.set(i, val + 1)
        }
        else {
            map.set(i, 1)
        }
    }
    // 后遍历nums2
    for (let i of nums2) {
        if (map.has(i) && map.get(i) !== 0) {
            res.push(i)
            let val = map.get(i)
            val = val === undefined ? 1 : val
            map.set(i, val - 1)
        } else
            continue
    }
    return res
};
// console.log(intersect([9, 4, 9, 8, 4], [4, 9, 5]));
