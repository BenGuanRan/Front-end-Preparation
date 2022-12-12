/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    const arr = points.sort((a, b) => a[1] - b[1])
    let res = 1
    let pr = 0 // 指向当前关注的气球
    for (let i = 1; i < arr.length; i++) {
        if (arr[pr][1] >= arr[i][0]) {
            continue
        } else {
            res++
            pr = i
        }
    }
    return res
};


// console.log(findMinArrowShots( [[1,2],[2,3],[3,4],[4,5]]));