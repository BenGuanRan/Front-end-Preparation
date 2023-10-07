function multiply(num1: string, num2: string): string {
    if (num1 === '0' || num2 === '0') return '0'
    let len1 = num1.length, len2 = num2.length, res = new Array(len1 + len2).fill(0)
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            // 从个位数开始，逐步相乘
            const mul = Number(num1[i]) * Number(num2[j])
            // 乘积在结果数组中对应的位置
            const p1 = i + j, p2 = i + j + 1
            // 对结果进行累加
            const sum = mul + res[p2]
            res[p1] += Math.floor(sum / 10)
            res[p2] = sum % 10
        }
    }
    if (res[0] === 0) res.shift()
    return res.join("")
};
