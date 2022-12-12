type Union = 'name' | 'age' | 'sex'

type X = {
    [K in Union]: string | number
}

const c: X = {
    name: 'Aran',
    age: 12,
    sex: '男'
}