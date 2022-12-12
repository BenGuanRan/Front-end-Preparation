/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const res = []
    // 将intervals按照左区间进行排序
    const arr = intervals.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // 进行合并
            if (arr[i][1] >= arr[j][0]) {
                arr[j] = [arr[i][0], Math.max(arr[j][1], arr[i][1])]
                arr[i] = 0
            }
        }
    }
    return arr.filter(i => i !== 0)
};
// console.log(merge([[1, 4], [4, 5]]));
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function (intervals) {
    const res = []
    // 将intervals按照左区间进行排序
    const arr = intervals.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // 进行合并
            if (arr[i][1] >= arr[j][0]) {
                arr[j] = [arr[i][0], Math.max(arr[j][1], arr[i][1])]
                arr[i] = 0
            }
        }
    }
    return arr.filter(i => i !== 0)
};
// console.log(merge([[1, 4], [4, 5]]));