const p_obj = new Proxy({}, {
    get(target, propKey, receiver) {
        return 2
    },
    set(target, propKey, value, receiver) {
        return 21
    }
})
const obj = {
    a: 1
}

obj.a = 2
console.log(obj);