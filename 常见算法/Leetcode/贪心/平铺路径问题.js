const x = [1, 1, 3, 9, 8, 2, 3, 4, 5]
const y = [3, 4, 8, 10, 10, 5, 7, 7, 10]

function fun(x, y) {
    const max = Math.max(...y)
    // 寻找x最小值且较长的点
    let min = x[0], maxLength = 0, nowMaxY = y[0]
    for (let j = 1; j < x.length; j++) {
        if (x[j] <= min && y[j] - x[j] > maxLength) {
            maxLength = y[j] - x[j]
            min = x[j]
            nowMaxY = y[j]
        }
    }
    // y按从大到小排序
    for (let i = 0; i < y.length - 1; i++) {
        let maxIndex = i
        for (let j = i + 1; j < y.length; j++) {
            if (y[j] > y[maxIndex]) {
                maxIndex = j
            }
        }
        // 交换
        let tem = y[maxIndex]
        y[maxIndex] = y[i]
        y[i] = tem
        tem = x[maxIndex]
        x[maxIndex] = x[i]
        x[i] = tem

    }
    let count = 1
    // 现在
    while (nowMaxY !== max)
        for (let i = 0; i < y.length; i++) {
            if (x[i] <= nowMaxY) {
                count++
                nowMaxY = y[i]
                break
            }
        }
    return count
}

console.log(fun(x, y));
