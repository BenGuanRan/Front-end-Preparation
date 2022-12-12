type TupleToObject<T extends readonly any[]> = {
    [i in T[number]]: T[number]
}
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type result = TupleToObject<typeof tuple>
const aa: result = {
    'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X',
    "model Y": "tesla"
}