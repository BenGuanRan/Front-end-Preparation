export default function myPlugin() {
    const virtualModuleId = 'virtual:my-module'
    const resolvedVirtualModuleId = '\0' + virtualModuleId
    return {
        name: 'my-plugin', // 必须的，将会在 warning 和 error 中显示
        resolveId(id) {
            console.log(`resolveId------${id}`);
            if (id === virtualModuleId) {
                return resolvedVirtualModuleId
            }
        },
        load(id) {
            // console.log(`load------${id}`);
            if (id === resolvedVirtualModuleId) {
                return `export const msg = "from virtual module"`
            }
        }
    }
}
