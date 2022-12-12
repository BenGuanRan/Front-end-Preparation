function maxVowels(s: string, k: number): number {
    const a = "aeiou"
    // 先定义一个窗口
    let l = 0, r = l + k - 1, val = 0, res = 0
    // 先统计窗口初始有几个元音字母
    for (let i = 0; i <= r; i++) {
        if (a.includes(s[i]))
            val++
    }
    res = Math.max(res, val)
    // 移动窗口
    while (r <= s.length - 1) {
        l++
        r++
        if (val === k)
            return val
        if (a.includes(s[l - 1]))
            val--
        if (a.includes(s[r]))
            val++
        res = Math.max(res, val)
    }
    return res
};

// console.log(maxVowels('leetcode', 3));
