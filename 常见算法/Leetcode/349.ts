function intersection(nums1: number[], nums2: number[]): number[] {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);//数组转成set
    if (set1.size > set2.size) {//用size小的数组遍历
        [set1, set2] = [set2, set1]
    }
    const intersection: Set<number> = new Set();
    for (const num of set1) {//遍历set1
        if (set2.has(num)) {//元素如果不存在于set2中就加入intersection
            intersection.add(num);
        }
    }
    return [...intersection];//转成数组
};