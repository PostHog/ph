import { exec, spawn } from 'child_process'

export default class Cli {
    async run_sync(payload: string[], working_directory:string, verbose:boolean): Promise<string|void> {
      for(let i=0; i<payload.length; i++) {
        let cmd = payload[i];
        if(verbose) console.log(`> ${cmd}`)
        try {
          await this.spawn_child(cmd, working_directory, verbose)
        } catch(e) {
          return Promise.reject(e)
        }
      }
      return Promise.resolve();
    }

    async run_async(payload: string[], working_directory:string, verbose:boolean): Promise<string|void> {
      for(let i=0; i<payload.length; i++) {
        let cmd = payload[i];
        if(verbose) console.log(`> ${cmd}`)
        try {
          this.spawn_child(cmd, working_directory, verbose)
        } catch(e) {
          return Promise.reject(e)
        }
      }
      return Promise.resolve();
    }

    spawn_child(cmd:string, working_directory:string, verbose:boolean): Promise<string|void> {
      const parts = cmd.split(' ')
      const [cmd_process, ...cmd_args] = parts
      return new Promise((accept, reject) => {
        const spawned_process = spawn(cmd_process, cmd_args, { cwd: working_directory});
        spawned_process.stdout.on("data", data => {
          if(verbose) console.log(`>> ${this.remove_line_breaks(data.toString())}`);
        });
        spawned_process.stderr.on("data", data => {
          console.log(`>> ${this.remove_line_breaks(data.toString())}`);
        });
        spawned_process.on('error', (error) => {
          console.log(`>> ${error.message}`)
          reject(error.message)
        });
        spawned_process.on("close", code => {
          accept();
        });
      })
    }

    remove_line_breaks(str:string):string {
      return str.replace(/^\s+|\s+$/g, '');
    }
}