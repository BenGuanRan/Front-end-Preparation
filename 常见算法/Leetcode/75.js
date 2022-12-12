var sortColors = function (nums) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.unshift(0);
        } else if (nums[i] === 2) {
            nums.splice(i, 1);
            nums.push(2);
            i--;
            len--;
        }
    }
};
