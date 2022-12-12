/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    // 按右边界排序，然后从左往右遍历，右边界结束的越早，留给后面的区间的空间就越大，不重合的区间个数就越多
    const arr = intervals.sort((a, b) => a[1] - b[1])
    let res = []
    res.push(arr[0])
    for (let i = 1; i < arr.length; i++) {
        if (res[res.length - 1][1] <= arr[i][0])
            res.push(arr[i])
    }
    return arr.length - res.length
};


// console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));
