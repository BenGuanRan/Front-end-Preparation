class Subject {
    constructor() {
        this.state = 100
        this.observers = [] // 观察者
    }
    addObservers(...args) {
        this.observers.push(...args)
    }
    setState(s) {
        let oldValue = this.state
        this.state = s
        this.observers.forEach(o => {
            o.update(this.state, oldValue)
        })
    }
}

class Observer {
    constructor(name) {
        this.name = name
    }
    update(newValue, oldValue) {
        console.log(`${oldValue}->${newValue}`);
    }
}



const s = new Subject()
const d = new Observer('医生')
const n = new Observer('护士')
s.addObservers(d, n)
s.setState(2)