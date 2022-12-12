/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    // 每次最小的与尽可能大的重量匹配
    const arr = people.sort((a, b) => b - a) // 数组倒序
    let res = 0 // 结果
    while (arr.length) {
        res++
        // 选取一个重量最重的人
        let p1 = arr.shift()
        let left = limit - p1
        // 看看是不是能拼船
        if (left >= arr[arr.length - 1])
            arr.pop()
    }

    return res
};


// console.log(numRescueBoats([3,5,3,4], 5));