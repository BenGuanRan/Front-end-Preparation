class Subject {
    constructor() {
        this.events = new Map()

    }
    on(eventName, eventFunction) {
        if (!this.events.get(eventName)) {
            this.events.set(eventName, [eventFunction])
        } else {
            this.events.get(eventName).push(eventFunction)
        }

    }
    emit(eventName, ...args) {
        let eventList = this.events.get(eventName)
        if (eventList)
            for (let event of eventList) {
                event.call(this, ...args)
            }
        else
            throw new Error(`The event "${eventName}" doesn't exist!`)

    }
}

const s = new Subject()
s.on('a', () => {
    console.log('event a is begin');
})
s.on('a', () => {
    console.log('event a is start');
})
s.on('b', (a, b) => {
    console.log(a + b);
})
s.on('c', (a, b) => {
    console.log(a * b);
})

s.emit('d', 1, 2)