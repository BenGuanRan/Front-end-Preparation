class Father {
    name: string
    constructor(name: string) {
        this.name = name
    }
    sayHi(): void {
        console.log('hi');
    }
}
console.log(Father.prototype);
