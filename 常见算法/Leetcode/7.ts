function reverse(x: number): number {
    const str_arr = (x + '').split('')
    if (x < 0) {
        str_arr.shift()
    }
    const t = Number(str_arr.reverse().join(''))
    if (t >= 2 ** 31 - 1 || -t <= 2 ** 31 - 1) return 0
    return x < 0 ? -t : t
};