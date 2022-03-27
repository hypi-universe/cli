
import {flags} from '@oclif/command'
import * as inquirer from 'inquirer'
import AuthCommand from '../auth-base'

import * as validators from '../hypi/helpers/input-validators'
import {messages} from '../hypi/helpers/messages'
import InitService from '../hypi/services/init-service'

export default class Init extends AuthCommand {
  static description = 'Init a hypi app'

  static flags = {
    help: flags.help({char: 'h'}),
    // have instance flag (-i, --have_instance)
    have_instance: flags.boolean({char: 'i'}),
  }

  static examples = [
    '$ hypi init -i',
    '$ hypi init --have_instance',
    '$ hypi init',
  ]

  async run() {
    const {flags} = this.parse(Init)
    const have_instance = flags.have_instance

    const initService = new InitService()
    // check if .hypi folder already exists and app.yaml and instance.yaml
    // ask him if he want to proceed and override
    if (initService.checkInitBefore()) {
      const proceedResponse: any = await inquirer.prompt([{
        name: 'proceed',
        message: messages.initCommand.proceed,
        type: 'confirm',
      }])
      if (!proceedResponse.proceed) this.exit(1)
    }

    // delete .hypi folder if already exists
    const deleteHypiDir = initService.deleteHypiDir()
    if (!deleteHypiDir) {
      this.error(messages.initCommand.failedDeleteHypi)
    }

    if (!have_instance) {
      const instanceResponse: any = await inquirer.prompt([{
        name: 'have_instance',
        message: messages.initCommand.haveInstance.message,
        type: 'confirm',
        default: false,
      }])
      if (instanceResponse.have_instance) {
        const domainResponses: any = await inquirer.prompt([{
          name: 'hypi_domain',
          message: messages.initCommand.hypiDomain.message,
          type: 'input',
          validate: validators.domainValidator,
        }])
        const response = await initService.doInitByDomain(domainResponses.hypi_domain)
        if (response.error) this.error(response.error)

        this.log(messages.initCommand.initDone)
      } else {
        const createInstanceResponses: any = await inquirer.prompt([
          {
            name: 'name',
            message: messages.initCommand.appName.message,
            type: 'input',
            validate: validators.AppNameValidator,
          },
          {
            name: 'label',
            message: messages.initCommand.appLabel.message,
            type: 'input',
            validate: validators.AppLabelValidator,
          },
          {
            name: 'website',
            message: messages.initCommand.website.message,
            type: 'input',
            validate: validators.WebsiteValidator,
          },
          {
            name: 'domain',
            message: messages.initCommand.domain.message,
            type: 'input',
          },
        ])
        // create .hypi folder app.yaml, instance.yaml and schema.graphql
        const initRes = await initService.doInit(createInstanceResponses)
        if (initRes.error) this.error(initRes.error)
        this.log(messages.initCommand.initDone)
      }
    }
  }
}
