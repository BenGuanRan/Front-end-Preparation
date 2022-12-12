var containsNearbyDuplicate = function(nums, k) {
    const set = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(set.has(nums[i])) {//找到了重复的元素
            return true;
        }
        set.add(nums[i]);//没找到就加入set中 扩大窗口
        if(set.size > k) {//滑动窗口超过了指定大小，缩小窗口
            set.delete(nums[i - k]);
        }
    }
    return false;
};