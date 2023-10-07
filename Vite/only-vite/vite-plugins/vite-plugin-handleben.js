

export default function handleBen(ext) {
    return {
        name: 'my-plugin', // 必须的，将会在 warning 和 error 中显示
        transform(src, id) {
            if (id.endsWith('.' + ext)) {
                return {
                    code: `${src}\n${src}`,
                    map: null // 如果可行将提供 source map
                }
            }
        },
    }
}
