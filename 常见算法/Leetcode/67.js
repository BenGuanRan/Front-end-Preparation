/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    // 将字符串转化为两个数组
    let t = b
    if (a.length < b.length) { b = a; a = t }
    const arr1 = a.split("").map(i => Number(i))
    const arr2 = b.split("").map(i => Number(i))
    const l1 = arr1.length
    const l2 = arr2.length
    const mainArr = l1 >= l2 ? arr1 : arr2
    let i = l1 - 1
    let j = l2 - 1

    while (Math.max(i, j) >= 0) {
        let sum = 0
        if (arr1[i] === undefined)
            sum = arr2[j]
        else if (arr2[j] === undefined) {
            sum = arr1[i]
        } else {
            sum = arr1[i] + arr2[j]
        }
        mainArr[i] = (sum) % 2
        // 需要进位
        if (sum >= 2) {
            mainArr[i - 1] === undefined ? mainArr.unshift(1) : mainArr[i - 1] += 1
        }
        i--;
        j--;
    }
    return mainArr.join("")
};
console.log(addBinary("111","1010" ));