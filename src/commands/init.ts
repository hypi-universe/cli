
import { Command, flags } from '@oclif/command';
import cli from 'cli-ux';

export default class Init extends Command {
  static description = 'Init a hypi app'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [
    { name: 'website' },
    { name: 'name' },
    { name: 'label' },
    { name: 'domain' },
  ]

  static examples = [
    `$ hypi init`,
  ]

  async run() {
    this.log('This command will walk you through creating app.yaml and instance.yaml files.');

    const { args, flags } = this.parse(Init)

  }
}