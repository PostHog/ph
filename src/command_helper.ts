import * as Config from '@oclif/config'
import {Command} from '@oclif/command'
import path = require('path')
import readline = require('readline')
import Cli from './cli'

export default abstract class CommandHelper extends Command {
  cli: Cli

  constructor(public argv: string[], public config: Config.IConfig) {
    super(argv, config)
    this.cli = new Cli()
  }

  getPath(directory: string|void, append:string|void): string {
    const hasPath = typeof directory !== 'undefined'
    let out = hasPath ? path.resolve(process.cwd(), directory || '') : process.cwd()
    if(typeof append === 'string') out = path.resolve(out, append || '')
    return out;
  }

  askUser(question: string, options: string[]): Promise<string> {
    return new Promise((accept, reject) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.question(`${question} [${options.join(',')}]: `, (answer) => {
        answer = answer.toLowerCase()
        if(options.indexOf(answer) === -1) {
          reject('you gave an invalid answer to a question')
        } else {
          accept(answer)
        }
        rl.close();
      });
    });
  }
}