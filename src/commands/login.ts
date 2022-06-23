import { Command, flags } from '@oclif/command'
import LoginService from '../hypi/services/login-service'
import UserService from '../hypi/services/user-service'
import { messages } from '../hypi/helpers/messages'
import * as inquirer from 'inquirer'
import HypiConfig from '../hypi/config'
import * as validators from '../hypi/helpers/input-validators'
import Wsk from './wsk'

export default class Login extends Command {
  static description = 'Login to hypi with email and password or domain and token'

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with no value (-d, --domain)
    domain: flags.boolean({ char: 'd' }),
  }

  static examples = [
    '$ hypi login',
    '$ hypi login -d',
    '$ hypi login --domain',
  ]

  async run() {
    const { flags } = this.parse(Login)
    const loginService = new LoginService()

    const apiDomainResponse: any = await inquirer.prompt([
      {
        name: 'api_domain',
        message: `${messages.loginCommand.enterApiDomain} (${HypiConfig.default_api_domain}) :`,
        type: 'input',
        validate: validators.DomainValidatorAllowEmpty,
      },
      {
        name: 'fn_domain',
        message: `${messages.loginCommand.enterFnDomain} (${HypiConfig.default_fn_domain}) :`,
        type: 'input',
        validate: validators.DomainValidatorAllowEmpty,
      },
    ])
    const api_domain = apiDomainResponse.api_domain ? apiDomainResponse.api_domain.trim() : HypiConfig.default_api_domain;
    const fn_domain = apiDomainResponse.fn_domain ? apiDomainResponse.fn_domain.trim() : HypiConfig.default_fn_domain;

    if (flags.domain) {
      this.log(messages.loginCommand.loginDomainMessage)
      await loginService.promptLoginByDomain()
    } else {
      this.log(messages.loginCommand.loginEmailMessage)
      await loginService.promptLoginByEmail()
    }

    // 1. write config to the file
    await this.config.runHook('hypi-config', this.config)
    UserService.saveToUserConfig({ api_domain: api_domain, fn_domain: fn_domain })

    // 2. login
    const loginResponse = await loginService.login()
    if (loginResponse.error) this.error(loginResponse.error)
    UserService.saveLoginData(loginResponse.data)

    // 3. wsk confiure
    await Wsk.run(['configure'])

    this.log(messages.loginCommand.loggedIn)
  }
}
