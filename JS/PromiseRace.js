Promise.my_race = function (promiseArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promiseArray))
            reject(new Error('The type of params must be Array'))
        for (let p of promiseArray) {
            Promise.resolve(p).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        }
    })
}
var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'one');
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'two');
});
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'four');
});
var p5 = new Promise((resolve, reject) => {
    setTimeout(reject, 5000, 'five');
});
Promise.my_race([p1, p2, p3, p4, p5]).then(res => console.log(res)).catch(err => console.log(err))