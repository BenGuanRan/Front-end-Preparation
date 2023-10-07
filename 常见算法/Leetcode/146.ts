class LRUCache {
    capacity: number
    cache: Map<number, number>
    constructor(capacity: number) {
        this.capacity = capacity
        this.cache = new Map<number, number>()
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            const val = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, val as number)
            return val as number
        }
        return -1
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        }
        this.cache.set(key, value)
        if (this.cache.size > this.capacity) {
            // 删除最后一个元素
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}
