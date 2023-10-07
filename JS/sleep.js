const len = 4
const arr = [5, 4, 7, 4]
const n = 4
const Ls = [1, 2, 3, 2]
const Rs = [4, 3, 4, 2]
const Dos = '=|&='.split("")
const Xs = '8 3 6 2'.split(" ").map(i => parseInt(i))

for (let i = 0; i < n; i++) {
    for (let j = Ls[i] - 1; j <= Rs[i] - 1; j++) {
        if (Dos[i] === '=') arr[j] = Xs[i]
        else
            arr[j] = eval(`${arr[j]}${Dos[i]}${Xs[i]}`)
    }
}
console.log(arr.join(' '))