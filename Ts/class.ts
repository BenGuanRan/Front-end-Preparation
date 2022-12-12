class Father {
    name: string
    job: string
    constructor(name: string, job: string) {
        this.name = name
        this.job = job
    }
    doJob(job: string | void): string {
        job = job || this.job
        console.log('我正在做' + job);
        return '我正在做' + job
    }
}

class Son extends Father {
    constructor(name: string, job: string) {
        super(name, job)
    }
    doJob(): string {
        console.log('我正在学' + this.job);
        return '我正在学' + this.job
    }
    fatherJob(): void {
        super.doJob('监督儿子' + this.job + '的工作')
    }
}


const f = new Father('Bob', '司机')
f.doJob()
const s = new Son('Mack', 'Ts')
s.doJob()
s.fatherJob()