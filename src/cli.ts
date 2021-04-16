import { exec, spawn } from 'child_process'

export default class Cli {
    commands: string[]

    constructor() {
        this.commands = []
    }

    add(cmd:string):void {
      this.commands.push(cmd)
    }

    spawn_child(cmd:string, working_directory:string, verbose:boolean): Promise<string|void> {
      const parts = cmd.split(' ')
      const [cmd_process, ...cmd_args] = parts
      return new Promise((accept, reject) => {
        const spawned_process = spawn(cmd_process, cmd_args, { cwd: working_directory});
        spawned_process.stdout.on("data", data => {
          if(verbose) console.log(`>> ${data}`);
        });
        spawned_process.stderr.on("data", data => {
          if(verbose) console.log(`>> ${data}`);
        });
        spawned_process.on('error', (error) => {
          reject(error.message)
        });
        spawned_process.on("close", code => {
          accept();
        });
      })
    }

    async run(working_directory:string, verbose:boolean): Promise<string|void> {
      for(let i=0; i<this.commands.length; i++) {
        let cmd = this.commands[i];
        if(verbose) console.log(`> ${cmd}`)
        try {
          await this.spawn_child(cmd, working_directory, verbose)
        } catch(e) {
          return Promise.reject(e)
        }
      }
      this.commands = []
      return Promise.resolve();
    }

    toString() {
        return `Shell Commands:\n${this.commands.join(`\n`)}`
    }
}