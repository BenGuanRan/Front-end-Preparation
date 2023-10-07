function findKthLargest(nums: number[], k: number): number {
    let size = nums.length
    function down(i: number, size: number) {
        while (i < size) {
            let left_index = 2 * i + 1
                , right_index = 2 * i + 2
            if (left_index >= size) return
            let index = nums[left_index] > nums[right_index] ? left_index : (nums[right_index] ? right_index : left_index)
            let t = nums[i]
            nums[i] = nums[index]
            nums[index] = t
            i = index
        }
    }
    function heapify(size: number) {
        for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
            down(i, size)
        }
    }
    heapify(3)
    console.log(nums);

    return nums[0]
    // for (let i = 0; i < k - 1; i++) {
    //     // 交换，将最大值放到末尾
    //     let t = nums[0]
    //     nums[0] = nums[size - 1]
    //     nums[size - 1] = t
    //     heapify(--size)
    //     // 减小堆尺寸
    //     console.log(nums);
    // }
    // return nums[0]
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));