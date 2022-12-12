
var letterCombinations = function (digits) {
    const arr = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    const res = []
    const fun = (str, num) => {
        if (num == '') {
            return res.push(str)
        }
        let numStr = num.slice(1, num.length)
        num = Number(num[0])
        for (let i of arr[num]) {
            fun(str + i, numStr)
        }
    }
    if (digits === '') {
        return []
    }
    fun('', digits)
    return res
};

console.log(letterCombinations(''));