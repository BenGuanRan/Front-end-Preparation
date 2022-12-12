function sleep(time) {
    return new Promise((res) => {
        setTimeout(res, time)
    })
}
sleep(1000).then(()=> {
    console.log(111);
})
