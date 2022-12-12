var isValid = function (s) {
    const tem = ['(', '{', '[', ')', '}', ']']
    const arr = []
    for (let i of s) {
        if (tem.indexOf(i) <= 2) {
            arr.push(i)
        } else {
            if (tem.indexOf(arr[arr.length - 1]) !== -1 && Math.abs(tem.indexOf(i) - tem.indexOf(arr[arr.length - 1])) === 3)
                arr.pop()
            else return false
        }

    }
    return arr.length === 0
};
console.log(isValid("["));