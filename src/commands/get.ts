import { Command, flags } from '@oclif/command'
import LoginService from '../hypi/services/login-service'
import UserService from '../hypi/services/user-service'
import { messages } from '../hypi/helpers/messages'
import * as inquirer from 'inquirer'
import HypiConfig from '../hypi/config'
import * as validators from '../hypi/helpers/input-validators'
import Wsk from './wsk'

export default class Get extends Command {
  static description = 'Get configuration'

  static flags = {
    help: flags.help({ char: 'h' }),
    api_domain: flags.boolean({ char: 'a', description: 'show configured api domain' }),
    fn_domain: flags.boolean({ char: 'f' , description: 'show configured fn domain' }),
    auth: flags.boolean({ char: 'u' , description: 'show authentication' }),
    domain: flags.boolean({ char: 'd' , description: 'show configured domain' }),
    token: flags.boolean({ char: 't' , description: 'show token' }),
    token_expires: flags.boolean({ char: 'e' , description: 'show token expiry' }),
  }

  static examples = [
    '$ hypi get',
    '$ hypi get -a',
    '$ hypi get --api_domain',
    '$ hypi get -a -f',
    '$ hypi get --api_domain --fn_domain',
  ]

  async run() {
    const { flags } = this.parse(Get)

    if (!UserService.isUserConfigExists) this.error(messages.configCommand.enterConfig)
    const userConfig = UserService.getUserConfig()

    let output;
    if (Object.keys(flags).length === 0) {
      output = this.getConfig(userConfig, Object.keys(Get.flags))
    }
    else {
      output = this.getConfig(userConfig, Object.keys(flags))
    }
    this.log(output.join('\r\n'));
  }

  private getConfig(userConfig: any, keys: any) {
    const output = []
    for (const key of keys) {
      switch (key) {
        case 'api_domain':
          output.push(`API Domain : ${userConfig.api_domain}`)
          break;
        case 'fn_domain':
          output.push(`FN Domain : ${userConfig.fn_domain}`)
          break;
        case 'domain':
          output.push(`Domain : ${userConfig.domain}`)
          break;
        case 'token':
          output.push(`Token: ${userConfig.sessionToken}`)
          break;
        case 'token_expires':
          output.push(`Token Expires : ${new Date(userConfig.sessionExpires * 1000)}`) //.toLocaleDateString("en-US")
          break;
        case 'auth':
          output.push(`Auth: ${userConfig.domain}:${userConfig.sessionToken}`)
          break;
        default:
          break;
      }
    }
    return output;
  }
}
