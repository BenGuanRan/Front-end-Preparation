function findAnagrams(s: string, p: string): number[] {
    if (s.length < p.length)
        return []
    const res: number[] = []
    const pCount: number[] = new Array(26).fill(0)
    const wCount: number[] = new Array(26).fill(0)
    // 统计26个英文字母在p中出现的次数
    for (let i = 0; i < p.length; i++) {
        pCount[p[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
        wCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
    if (pCount.toString() === wCount.toString())
        res.push(0)
    for (let i = 1; i < s.length - p.length + 1; i++) {
        wCount[s[i - 1].charCodeAt(0) - 'a'.charCodeAt(0)]--
        wCount[s[i + p.length - 1].charCodeAt(0) - 'a'.charCodeAt(0)]++
        console.log(i + p.length - 1);
        if (pCount.toString() === wCount.toString())
            res.push(i)
    }
    return res
};

console.log(findAnagrams("abab", "ab"));
