import {Command, flags} from '@oclif/command'
import LoginService from '../hypi/services/login-service'
import UserService from '../hypi/services/user-service'
import {messages} from '../hypi/helpers/messages'

export default class Login extends Command {
  static description = 'Login to hypi with email and password or domain and token'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with no value (-d, --domain)
    domain: flags.boolean({char: 'd'}),
  }

  static examples = [
    '$ hypi login',
    '$ hypi login -d',
    '$ hypi login --domain',
  ]

  async run() {
    const {flags} = this.parse(Login)
    const loginService = new LoginService()

    if (flags.domain) {
      this.log(messages.loginCommand.loginDomainMessage)
      await loginService.promptLoginByDomain()
    } else {
      this.log(messages.loginCommand.loginEmailMessage)
      await loginService.promptLoginByEmail()
    }

    const loginResponse = await loginService.login()
    if (loginResponse.error) this.error(loginResponse.error)

    await this.config.runHook('hypi-config', this.config)

    UserService.saveUserConfig(loginResponse.data)
    this.log(messages.loginCommand.loggedIn)
  }
}
