async function fun(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) count++;
        }
    }
    return count
}


function getTime_2(arr) {
    let a = Date.now()
    fun(arr);
    let b = Date.now()
    return (b - a);
}

module.exports = getTime_2