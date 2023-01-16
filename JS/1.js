class A {
    a = 1
    get a() {
        return this.a++
    }
    print() {
        console.log(this.a);
    }
}
const b = new A()
console.log(b.a);
b.print()
