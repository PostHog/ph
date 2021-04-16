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
          if (stderr) {
            reject(stderr)
          }
          accept(stdout)
        });
      })
    }

    async run(verbose:boolean): Promise<string|void> {
      return new Promise((accept, reject) => {
        this.commands.forEach(async (cmd) => {
            if(verbose) console.log(`> ${cmd}`)
            try {
              const logs = await this.shell(cmd)
              if(verbose) console.log(`>> ${logs}`)
            } catch(e) {
              reject(e)
            }
        })
        accept();
      })
    }

    toString() {
        return `Shell Commands:\n${this.commands.join(`\n`)}`
    }
}