const obj = {
    name: 'aran',
    age: 1,
    school: {
        aign: 'no1'
    }
}

// 封装一个监听数据变化的函数
function defineProperty(obj, key, val) {
    // 如果监听的值是对象，则也需要进行观察

    Object.defineProperty(obj, key, {
        get() {
            observer(val)
            console.log('get');
            return val
        },
        set(newVal) {
            observer(val)
            console.log('set');
            val = newVal
        }
    })
}

function observer(obj) {
    if (typeof obj !== 'object' || obj == null) {
        return
    }
    // 给对象每个属性都设置响应式
    for (let i in obj) {
        defineProperty(obj, i, obj[i])
    }
}
observer(obj)
obj.name = 1
console.log(obj.school);