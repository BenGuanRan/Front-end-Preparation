// interface IPerson {
//     name: string | string[]
//     sayHi: () => string | void
// }

// var customer: IPerson = {
//     name: ["Hanks", 'aa'],
//     sayHi: (): void => { }
// }
// console.log(customer);


interface A {
    [index: number]: string | number
}
const a: A = ['1', 1]
const b = {
    '0': '1',
    '1': 1
}
console.log(a, b);


interface namelist {
    [index: number]: string
}

// 类型一致，正确
const list2 = <namelist>["Google", "Runoob", "Taobao"]

interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}

// var customer = <IPerson>{
//     firstName: "Tom",
//     lastName: "Hanks",
//     sayHi: (): string => { return "Hi there" }
// }