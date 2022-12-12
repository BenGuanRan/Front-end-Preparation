function removeElement(nums: number[], val: number): number {
    const n = nums.length;
    let left = 0;//left指针初始在0号位置
    for (let right = 0; right < n; right++) {//用right指针循环数组
        if (nums[right] !== val) {//当前元素不为val，则直接覆盖left位置的元素
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
};
