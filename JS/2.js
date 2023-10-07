
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let input = '';
process.stdin.on('data', (data) => {
    input += data;
});
process.stdin.on('end', () => {
    let inputArray = input.split('\n');
    const bians_len = inputArray[1] - 0
    const bians = inputArray.slice(2, 2 + bians_len).map(i => i.split(" ").map(i => i - 0))
    const blocks_len = inputArray[bians_len + 2] - 0
    const blocks = new Set(inputArray.slice(inputArray.length - blocks_len, inputArray.length).map(i => i - 0))
    // 归一化整理
    const map = new Map()
    for (const x of bians) {
        if (!map.has(x[0])) map.set(x[0], [x])
        else {
            const t = map.get(x[0])
            t.push(x)
        }
    }
    // 寻找叶子节点
    const res = []
    function find(node, path) {
        if (blocks.has(node)) return
        else {
            let count = 0
            if (map.has(node)) {
                const t = map.get(node)
                t.forEach(i => find(i[1], [...path, i[1]]))
            } else {
                return res.push(path)
            }
        }
    }
    find(0, [0])
    if (res.length === 0) console.log("NULL")
    else {
        let min_res = res[0]
        res.forEach(r => {
            if (r.length < min_res.length) {
                min_res = r
            }
        })
        console.log(min_res.join('->'));

    }
    process.exit();
});
