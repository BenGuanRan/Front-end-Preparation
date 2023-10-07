class Trie {
    words: Set<string>;

    constructor() {
        this.words = new Set()
    }

    insert(word: string): void {
        this.words.add(word)
    }

    search(word: string): boolean {
        return this.words.has(word)
    }

    startsWith(prefix: string): boolean {
        for (let word of this.words) {
            if (word.indexOf(prefix) === 0) return true
        }
        return false
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */