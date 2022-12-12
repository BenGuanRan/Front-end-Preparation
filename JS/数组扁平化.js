const arr = [1, 2, 3]
console.log(arr.reduce((preSum, curVal) => {
    console.log(preSum);
    return preSum + curVal
}))