function hasLoop(obj) {
    // 判断对象内部是否有和源相同的属性
    function findLoop(target, src) {
        // 源数组，并将自身传入
        src.add(target)

        for (const key in target) {
            // 如果是对象才需要判断
            if (typeof target[key] === 'object') {
                // 如果在源数组中找到 || 递归查找内部属性找到相同
                if (src.has(target[key]) || findLoop(target[key], source)) {
                    return true
                }
            }
        }
        return false
    }
    // 如果传入值是对象，则执行判断，否则返回false
    return typeof obj === 'object' ? findLoop(obj, new Set()) : false
}

const a = {

}
a.x = a
console.log(hasLoop(a));