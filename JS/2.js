const p = new Promise((resolve, reject) => {
    reject(1)
})


console.log(Promise.resolve(p));