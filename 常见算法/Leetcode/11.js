/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // 左右指针
    let l = 0,
        r = height.length - 1,
        h = Math.min(height[0], height[height.length - 1]),
        res = (r - l) * h
    while (l < r) {
        while (h <= Math.min(height[l], height[r]) && l < r) {
            if (height[l] <= h)
                l++
            else
                r--
            h = Math.min(height[l], height[r])
            res = Math.max(res, h * (r - l))
        }
    }
    return res
};

console.log(maxArea([1, 1]));