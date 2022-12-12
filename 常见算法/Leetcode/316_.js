/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    // 思路就是 遇到一个新字符 如果比栈顶小 并且在新字符后面还有和栈顶一样的 就把栈顶的字符抛弃了
    let res = ['']
    s = s.split("")
    while (s.length > 0) {
        let c = s.shift()
        console.log(res);
        if (res.includes(c)) {
            // 遇到重复字符
            let res1 = res.join('').split(c).join('') + c
            if (res1 <= res.join('')) {
                // 若字典序更低则替换
                res = res1.split('')
            }
            continue
        } else {
            // 遇到了一个新字符
            if (c <= res[res.length - 1] && s.includes(res[res.length - 1]))
                // 若c已存在
                res.pop()
            res.push(c)
        }


    }
    return res.join("")
};

console.log(removeDuplicateLetters("tknvntfipavdqjiyslpdlokuymbutpynnxqekoktlqzrhoyvbewklzuamhwtqygsiakymyqwqiqtouynaiowwf"));