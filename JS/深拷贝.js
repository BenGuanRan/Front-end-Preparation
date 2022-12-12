function clone(target) {
    if (typeof target === 'object' && target !== null) {
        let cloneTarget = Array.isArray(target) ? [] : {}
        for (let i in target) {
            cloneTarget[i] = clone(target[i])
        }
        return cloneTarget
    } else {
        return target
    }
}
const target = {
    field1: 1,
    field2: null,
    field3: 'ConardLi',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2',
            a: [1, 2, 23, 3]
        }
    }
};


console.log(clone(target));