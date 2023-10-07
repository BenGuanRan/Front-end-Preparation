function myAtoi(s: string): number {
    let flag = true, num = 0, kgFlag = false
    // 处理头部空格
    s = s.trim()
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '+' && i === 0) continue
        else if (s[i] === '-' && i === 0) flag = false
        else if (s[i].charCodeAt(0) >= '0'.charCodeAt(0) && s[i].charCodeAt(0) <= '9'.charCodeAt(0)) {
            num = num * 10 + Number(s[i])
        } else break
    }
    let val = flag ? num : -num
    if (val >= 2 ** 31 - 1) return 2 ** 31 - 1
    if (val <= -(2 ** 31)) return -(2 ** 31)
    return val
};

