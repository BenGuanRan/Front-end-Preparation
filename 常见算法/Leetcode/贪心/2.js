
const Count = [3, 10, 2, 1, 0, 0, 0];
const Value = [1, 2, 5, 10, 20, 50, 100];
const Money = 173

function solve(C, V) {
    let M = Money, res = []
    for (let i = V.length - 1; i >= 0 && M > 0;) {
        if (C[i] === 0)
            i--
        else {
            C[i]--
            M -= V[i]
            res.push(V[i])
        }


    }
    return res
}

console.log(solve(Count, Value));