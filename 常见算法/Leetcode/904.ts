function totalFruit(fruits: number[]): number {
    let l = 0, m = 0, r = 0, res = 1, num1 = fruits[0], num2: number | null = null
    // 先找到两个不一样的数，为num2赋值
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] !== num1) {
            num2 = fruits[i]
            break
        }

    }

    if (num2 === null)
        return fruits.length
    while (r <= fruits.length - 1) {
        res = Math.max(r - l + 1, res)
        console.log(l, r, m, num1, num2);

        r++

        if (fruits[r] !== num1 && fruits[r] !== num2) {
            // 代表当前窗口遇到了一个不一样的数，且是第二次遇到
            num1 = fruits[r - 1]
            num2 = fruits[r]
            l = m
        } if (fruits[r] !== fruits[r - 1])
            m = r
    }
    return res
};

console.log(totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3]));
