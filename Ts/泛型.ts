interface HasLength {
    length: number
}

function func<T extends HasLength>(a: T): number {
    return a.length
}

