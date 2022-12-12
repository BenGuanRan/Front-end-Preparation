interface A1 {
    name: string
}

interface A2 extends A1 {
    age: number
}

type A = A2 extends A1 ? true : false
const x: A = true