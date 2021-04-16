import { exec } from 'child_process'

export default class Cli {
    commands: string[]

    constructor() {
        this.commands = []
    }

    add(cmd:string):void {
      this.commands.push(cmd)
    }

    shell(cmd:string): Promise<string|undefined> {
      return new Promise((accept, reject) => {
        exec(cmd, (error, stdout, stderr) => {
          if (error) {
            reject(error.message)
          }
          //if (stderr) {
            //console.log('stderr', typeof stderr, stderr === '')
            //reject(stderr)
          //}
          accept(stdout)
        });
      })
    }

    async run(verbose:boolean): Promise<string|void> {
      for(let i=0; i<this.commands.length; i++) {
        let cmd = this.commands[i];
        if(verbose) console.log(`Running > ${cmd}`)
        try {
          const logs = await this.shell(cmd)
          if(verbose && logs !== '') console.log(`>> ${logs}`)
        } catch(e) {
          return Promise.reject(e)
        }
      }
      return Promise.resolve();
    }

    toString() {
        return `Shell Commands:\n${this.commands.join(`\n`)}`
    }
}