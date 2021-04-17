import {flags} from '@oclif/command'
import CommandHelper from '../command_helper'
import path = require('path')

export default class Up extends CommandHelper {
  static description = 'describe the command here'

  static flags = {
    verbose: flags.boolean({char: 'v', default: false}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Up)
    try {
      let is_posthog_directory = path.basename(process.cwd()) === 'posthog';
      if(!is_posthog_directory) throw(`PostHog was not found in this directory`)

      this.cli.run_async([
        `bin/start-frontend`,
        `docker-compose -f docker-compose.dev.yml up`
      ], process.cwd(), flags.verbose);

    } catch(e) {
      this.log(`[up] aborted because ${e}.`)
      this.exit()
    }
  }
}
