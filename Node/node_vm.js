import vm from 'node:vm'

const ctx = { x: 1 }

vm.createContext(ctx)

const code = `x+=40;y=2;`
vm.runInNewContext()

console.log(ctx);