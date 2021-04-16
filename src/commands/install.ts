import {Command, flags} from '@oclif/command'
import path = require('path')
import readline = require('readline')
import CLI from '../cli'

const GITHUB_SSH = 'git@github.com:PostHog/posthog.git';
const GITHUB_HTTPS = 'https://github.com/PostHog/posthog.git';

export default class Install extends Command {
  static description = 'install posthog'

  static flags = {
    path: flags.string({char: 'p', description: 'path to install posthog'}),
    verbose: flags.boolean({char: 'v', default: false}),
  }

  static args = []

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

  async run() {
    const {args, flags} = this.parse(Install)
    try {
      const repo_dir = this.getPath(flags.path, 'posthog')

      const pathOkay = await this.askUser(`Install posthog at ${repo_dir}?`, ['y', 'n'])
      if(pathOkay === 'n') throw(`you wanted to use a different path`)

      const sshOrHttps = await this.askUser(`Github clone via SSH or HTTPS?`, ['ssh', 'https'])

      const cli = new CLI()

      cli.add(`git clone ${sshOrHttps === 'ssh' ? GITHUB_SSH : GITHUB_HTTPS } ${repo_dir}`)

      this.log(cli.toString())

      await cli.run(flags.verbose)

      //this.log(`verbose? ${flags.verbose}`)
      //this.log(`path? ${flags.path}`)
      //this.log(`repo dir? ${repo_dir}`)
      //this.log(`path okay? ${pathOkay}`)
      //this.log(`ssh or https? ${sshOrHttps}`)
      this.log(`Finished.`)
    } catch(e) {
      this.log(`Install aborted because ${e}.`)
      this.exit()
    }
  }
}
