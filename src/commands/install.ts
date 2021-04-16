import {Command, flags} from '@oclif/command'

export default class Install extends Command {
  static description = 'install posthog'

  static flags = {
    verbose: flags.boolean({char: 'v', default: false}),
  }

  static args = []

  async run() {
    const {args, flags} = this.parse(Install)
    this.log(`Verbose? ${flags.verbose}`)
  }
}
