
import {Command, flags} from '@oclif/command'

import {messages} from '../hypi/helpers/messages'
import UserService from '../hypi/services/user-service'

export default class Config extends Command {
  static hidden = true

  static description = 'Set user configuration like api domain and/or fn_domain for wsk servlesss functions'

  static flags = {
    help: flags.help({char: 'h'}),
    api_domain: flags.string({char: 'a'}),
    fn_domain: flags.string({char: 'f'}),
  }

  static args = [
    {
      name: 'api_domain',
    },
    {
      name: 'fn_domain',
    },
  ]

  static examples = [
    '$ hypi config https://api.my-onpremise-domain.com',
    '$ hypi config https://fn.your.domain',
    '$ hypi config https://api.my-onpremise-domain.com https://fn.your.domain',

    '$ hypi config -a=https://api.my-onpremise-domain.com',
    '$ hypi config -f=https://fn.your.domain',
    '$ hypi config -a=https://api.my-onpremise-domain.com -f=https://fn.your.domain',

    '$ hypi config --api_domain=https://api.my-onpremise-domain.com',
    '$ hypi config --fn_domain=https://fn.your.domain',
    '$ hypi config --api_domain=https://api.my-onpremise-domain.com --fn_domain=https://fn.your.domain',
  ]

  async run() {
    const {args, flags} = this.parse(Config)

    let valid = false;
    for (const [key, value] of Object.entries(args)) {
      if(value) valid = true;
    }
    if (!valid && Object.keys(flags).length === 0) {
      this.error(messages.configCommand.enterConfig)
    }

    const defaultConfig : any = {api_domain: null,fn_domain:null}
    defaultConfig.api_domain = args.api_domain ?? flags.api_domain;
    defaultConfig.fn_domain = args.fn_domain ?? flags.fn_domain;

    await this.config.runHook('hypi-config', this.config)

    let data = Object.keys(defaultConfig)
    .filter((k) => defaultConfig[k] != null)
    .reduce((a, k) => ({ ...a, [k]: defaultConfig[k] }), {});

    UserService.saveToUserConfig(data)

    this.log(messages.configCommand.doneMessage)
  }
}
