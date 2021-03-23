import { Command, flags } from '@oclif/command'
import cli from 'cli-ux'
import hypiLogin from '../hypi/api/login'
import Utils from '../hypi/util'
import UserService from '../hypi/services/user-service'
import * as Conf from 'conf';

export default class Login extends Command {
  static description = 'Login to hypi'

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-e, --email=VALUE)
    email: flags.string({ char: 'e', description: 'your email' }),
    // flag with a value (-p, --password=VALUE)
    password: flags.string({ char: 'p', description: 'your password' }),
    // flag with no value (-i, --interactive)
    interactive: flags.boolean({ char: 'i' }),
  }

  static examples = [
    `$ hypi login your@email.com your-password`,
  ]

  async run() {
    const { args, flags } = this.parse(Login)
    let email;
    let password;

    if (!flags.interactive) {
      this.error('hypi login -i', { exit: 2 })
      this.exit(1);
    }
    /** prompt the user to enter email and password */
    this.log("hypi: Enter your login credentials")
    email = await cli.prompt('Email?')
    password = await cli.prompt('Password?', { type: 'hide' })

    /** login to hypi */
    const data = await hypiLogin(email, password);
    if (data.error) {
      this.error(data.error);
      this.exit();
    }

    await this.config.runHook('hypi-config', this.config);

    UserService.saveUserConfig(data);

  }
}
