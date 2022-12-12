var lengthOfLIS = function (nums) {
    let n = nums.length;
    if (n <= 1) {
        return n;
    }
    let tail = [nums[0]];//存放最长上升子序列数组
    for (let i = 0; i < n; i++) {
        if (nums[i] > tail[tail.length - 1]) {//当nums中的元素比tail中的最后一个大时 可以放心push进tail
            tail.push(nums[i]);
        } else {//否则进行二分查找
            let left = 0;
            let right = tail.length - 1;
            while (left < right) {
                let mid = (left + right) >> 1;
                if (tail[mid] < nums[i]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            tail[left] = nums[i];//将nums[i]放置到合适的位置，此时前面的元素都比nums[i]小
        }
    }
    return tail.length;
};