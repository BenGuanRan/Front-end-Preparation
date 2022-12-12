//s = "abcd", t = "abcde"
var findTheDifference = function (s, t) {
    let ret = 0;//循环s和t 不断异或 相同元素异或等于0 所以唯一不同的字符最后会留下来
    for (const ch of s) {
        ret ^= ch.charCodeAt();
    }
    for (const ch of t) {
        ret ^= ch.charCodeAt();
    }
    return String.fromCharCode(ret);
};