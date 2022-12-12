function getArr(n) {
    let arr = [], num
    for (let i = 0; i < n; i++) {
        num = Math.random() * 100
        arr.push(Math.floor(num))
    }
    return arr

}

module.exports = getArr 