var guessNumber = function (n) {
    let left = 1, right = n;
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (guess(mid) <= 0) {
            right = mid; //更新查找区间为[left, mid]
        } else {
            left = mid + 1; //更新查找区间为[mid+1, right]
        }
    }
    //left == right为答案
    return left;
};
