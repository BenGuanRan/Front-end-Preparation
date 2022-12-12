const gas = [2]
const cost = [2]
var canCompleteCircuit = function (gas, cost) {
    const arr = []
    const Z = []
    let sum = 0
    for (let i = 0; i < gas.length; i++) {
        let item = gas[i] - cost[i]
        arr.push(item)
        sum += item
        if (item > 0)
            Z.push(i)
    }
    if (sum < 0)
        return -1
    if (arr.length === 1) {
        return 0
    }
    sumCount = 0
    let i = Z.pop()
    sum = arr[i]
    while (1) {
        sum += arr[(i + 1) % arr.length]
        if (sum >= 0)
            sumCount++
        else {
            sumCount = 0
            i = Z.pop()
            sum = arr[i]
            continue
        }
        if (sumCount >= arr.length)
            return (i + 1) % arr.length
        i++
        i = i % arr.length

    }
};

console.log(canCompleteCircuit(gas, cost));