class Subject {
    state: number;
    observers: Array<Observer>
    constructor() {
        this.state = 0
        this.observers = []
    }
    getState() {
        return this.state
    }
    setState(state: number) {
        this.state = state
        this.notifyAllObservers()
    }
    notifyAllObservers() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }
    attach(observer: Observer) {
        this.observers.push(observer)
    }
}

class Observer {
    name: string;
    subject: Subject;
    constructor(name: string, subject: Subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }
    update() {
        console.log(`${this.name} update, state: ${this.subject.getState()}`)
    }
}

let s = new Subject()
let o1 = new Observer('o1', s)
let o2 = new Observer('02', s)

s.setState(12)