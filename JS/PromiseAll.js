Promise.my_all = function (promiseArray) {    //返回一个Promise对象
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promiseArray))
            reject(new Error("Params must be the type of 'Array'!"))
        const res = []
        let counter = 0
        for (let i = 0; i < promiseArray.length; i++) {
            Promise.resolve(promiseArray[i]).then(value => {
                res[i] = value
                counter++
                if (counter === promiseArray.length)
                    resolve(res)
            }).catch(err => resolve(err))
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
Promise.my_all([p1, p2, p3, p4, p5]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})