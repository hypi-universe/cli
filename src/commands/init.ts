
import { Command, flags } from '@oclif/command';
import cli from 'cli-ux';
import * as inquirer from 'inquirer';
import * as validators from '../hypi/helpers/input-validators';
import { messages } from '../hypi/helpers/messages';
import InitService from '../hypi/services/init-service';
import UserService from '../hypi/services/user-service';

export default class Init extends Command {
  static description = 'Init a hypi app'

  static flags = {
    help: flags.help({ char: 'h' }),
    // have instance flag (-i, --have_instance)
    have_instance: flags.boolean({ char: 'i' })
  }

  static args = [
    { name: 'website' },
    { name: 'name' },
    { name: 'label' },
    { name: 'domain' },
  ]

  static examples = [
    `$ hypi init -i`,
    `$ hypi init --have_instance`,
    `$ hypi init`,
  ]

  async run() {
    this.log(messages.initCommand.intro);

    const { flags } = this.parse(Init)
    let have_instance = flags.have_instance;

    const initService = new InitService();
    //check if .hypi folder already exists and app.yaml and instance.yaml
    //ask him if he want to proceed and override
    if (initService.checkInitBefore()) {
      let proceedResponse: any = await inquirer.prompt([{
        name: 'proceed',
        message: messages.initCommand.proceed,
        type: 'confirm',
      }])
      if (!proceedResponse.proceed) this.exit(1);
    }

    if (!have_instance) {
      let instanceResponse: any = await inquirer.prompt([{
        name: 'have_instance',
        message: messages.initCommand.haveInstance.message,
        type: 'confirm',
        default: false,
      }])
      if (instanceResponse.have_instance) {
        let domainResponses: any = await inquirer.prompt([{
          name: 'hypi_domain',
          message: messages.initCommand.hypiDomain.message,
          type: 'input',
          validate: validators.domainValidator
        }])
        //if not logged int
        if (!UserService.isUserConfigExists()) {
          this.error('Please login first');
        }
        const response = await initService.doInitByDomain(domainResponses.hypi_domain);
        if (response.error) this.error(response.error)
        this.log(messages.initCommand.initDone)
      } else {
        let createInstanceResponses: any = await inquirer.prompt([
          {
            name: 'name',
            message: messages.initCommand.appName.message,
            type: 'input',
            validate: validators.AppNameValidator
          },
          {
            name: 'label',
            message: messages.initCommand.appLabel.message,
            type: 'input',
            validate: validators.AppLabelValidator
          },
          {
            name: 'website',
            message: messages.initCommand.website.message,
            type: 'input',
            validate: validators.WebsiteValidator
          },
          {
            name: 'domain',
            message: messages.initCommand.domain.message,
            type: 'input',
          }
        ]);
        //create .hypi folder app.yaml, instance.yaml and schema.graphql
        const initRes = await initService.doInit(createInstanceResponses);
        if (initRes.error) this.error(initRes.error)
        this.log(messages.initCommand.initDone)
      }
    }

  }
}