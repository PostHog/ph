import {flags} from '@oclif/command'
import CommandHelper from '../command_helper'

const GITHUB_SSH = 'git@github.com:PostHog/posthog.git';
const GITHUB_HTTPS = 'https://github.com/PostHog/posthog.git';

export default class Install extends CommandHelper {
  static description = 'install posthog'

  static flags = {
    path: flags.string({char: 'p', description: 'path to install posthog'}),
    verbose: flags.boolean({char: 'v', default: false}),
  }

  static args = []

  async run() {
    const {args, flags} = this.parse(Install)
    try {
      const repo_dir = this.getPath(flags.path, 'posthog')

      const pathOkay = await this.askUser(`Install posthog at ${repo_dir}?`, ['y', 'n'])
      if(pathOkay === 'n') throw(`you wanted to use a different path`)

      const sshOrHttps = await this.askUser(`Github clone via SSH or HTTPS?`, ['ssh', 'https'])

      this.cli.add(`git clone ${sshOrHttps === 'ssh' ? GITHUB_SSH : GITHUB_HTTPS } ${repo_dir}`)

      //this.log(this.cli.toString())

      await this.cli.run(flags.verbose)

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
