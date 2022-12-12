const getTime_1 = require('./逆序对')
const getTime_2 = require('./暴力')
const getArr = require('./arrays')
const fs = require('fs')
const res1 = []
const res2 = []

for (let i = 10; i <= 100000;) {
    let sum1 = 0
    let sum2 = 0
    for (let j = 0; j < 100; j++) {
        if (i == 100000) j = 100
        const arr = getArr(i)
        sum1 += getTime_1(arr)
        sum2 += getTime_2(arr)
        console.log(j);
    }
    res1.push(sum1 / 100)
    res2.push(sum2 / 100)
    i = i * 10
}

fs.writeFile('./res.js', res1.toString() + '\n' + res2.toString() + '\n', err => {
    if (err) {
        console.log('error');
        return
    }
    console.log('success');
})


