const p_obj = new Proxy({}, {
    get(target, propKey, receiver) {
        console.log(target, propKey, receiver);
        return 2
    },
    set(target, propKey, value, receiver) {
        console.log(target, propKey, value, receiver);
        return Reflect.set(target, propKey, value, receiver)
    }
})
const obj = {
    a: 1
}


p_obj.a = 1
const a = p_obj.a
console.log(a);