type a = { a: number };
type b = { a: number };
interface c { a: number };
interface d { a: number };
let o1: a = { a: 1 };
let o2: b = { a: 1 };
o1 = o2;
let o3: c = {
    a: 1
}
let o4: d = {
    a: 1
}

o3 = o4

o3;
