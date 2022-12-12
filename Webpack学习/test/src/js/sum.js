export default function sum(...args) {
    console.log(args);
    return args.reduce((i, j) => i + j, 0)
}