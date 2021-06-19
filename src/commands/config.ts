
import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'

import {messages} from '../hypi/helpers/messages'
import UserService from '../hypi/services/user-service'

export default class Config extends Command {
  static description = 'set user configuration'

  static flags = {
    help: flags.help({char: 'h'}),
    api_domain: flags.string({char: 'a'}),
  }

  static args = [
    {
      name: 'api_domain',
    },
  ]

  static examples = [
    '$ hypi config api.mydomain.com',
    '$ hypi config -a=api.mydomain.com',
    '$ hypi config --api_domain=api.mydomain.com',
  ]

  async run() {
    const {args, flags} = this.parse(Config)

    if (!args.api_domain && !flags.api_domain) {
      this.error(messages.configCommand.enterApiDomain)
    }
    const api_domain = args.api_domain ?? flags.api_domain
    // check it is a valid email
    UserService.saveApiDomainConfig(api_domain)

    this.log(messages.configCommand.doneMessage)

    // remove config file that have the token and domain, force user to login again
    UserService.deleteUserConfigFile()
  }
}
