function grayCode(n: number): number[] {
    const BEGIN_STR = '0'.repeat(n)
    const s = new Set([BEGIN_STR])
    let target = BEGIN_STR
    while (s.size < Math.pow(2, n)) {
        const target_arr = target.split('')
        for (let i = 0; i < n; i++) {
            target_arr[i] = (Number(target_arr[i]) + 1) % 2 + ''
            const str = target_arr.join('')
            if (!s.has(str)) {
                s.add(str)
                target = str
                break
            } else {
                target_arr[i] = (Number(target_arr[i]) + 1) % 2 + ''
            }
        }
    }
    return [...s].map(i => parseInt(i, 2))
};


