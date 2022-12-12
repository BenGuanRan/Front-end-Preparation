function* a() {
    console.log('a___begin');
    yield 1
    yield* b()
    yield 4
    return 5
}
function* b() {
    yield 2
    yield 3
}

var g = a()
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());