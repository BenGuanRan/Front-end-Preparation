var canIWin = function (maxChoosableInteger, desiredTotal) {
    // 考虑两种边界情况
    if (maxChoosableInteger >= desiredTotal) {
        return true
    };
    let sum = maxChoosableInteger * (maxChoosableInteger + 1) / 2;
    if (desiredTotal > sum) {
        return false
    };

    // map记录状态
    let map = new Map();
    // 记录已经访问的数
    let visited = new Array(maxChoosableInteger + 1).fill(0);
    // 通过搜索判断当前玩家是否一定获胜
    return dfs(maxChoosableInteger, desiredTotal, visited, map)
};
function dfs(maxChoosableInteger, desiredTotal, visited, map) {
    let state = visited.toString();
    // 如果已有当前状态记录，则直接返回
    if (map.has(state)) {
        return map.get(state)
    };
    for (let i = 1; i <= maxChoosableInteger; i++) {
        if (!visited[i]) {
            // 第一种情况：期望得到值<=所选值,则当前情况的玩家获胜
            if (desiredTotal - i <= 0) {
                map.set(state, true);
                return true
            };
            // 第二种情况：当前选择会导致下一次的兄弟输，则证明当前选择是稳赢的
            visited[i] = 1;
            let result = dfs(maxChoosableInteger, desiredTotal - i, visited, map);
            visited[i] = 0;
            if (result == false) {
                map.set(state, true);
                return true;
            }
        }
    }
    map.set(state, false);
    return false;
}
