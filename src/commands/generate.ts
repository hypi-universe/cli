
import {flags} from '@oclif/command'
import cli from 'cli-ux'
import * as inquirer from 'inquirer'
import AuthCommand from '../auth-base'

import {messages} from '../hypi/helpers/messages'
import {Platforms} from '../hypi/services/platform-service'
import PlatformService from '../hypi/services/platform-service'
import HypiService from '../hypi/services/hypi-service'
import Context from '../hypi/services/platforms/context'
import FlutterService from '../hypi/services/platforms/flutter-service'
import ReactjsService from '../hypi/services/platforms/reactjs-service'
import AngularService from '../hypi/services/platforms/angular-service'
import VuejsService, {VuejsOptions} from '../hypi/services/platforms/vuejs-service'

const platformOptions = PlatformService.platformsArray()
const generationTypes = VuejsService.generationTypesArray()

export default class Generate extends AuthCommand {
  static description = 'generate the schema typescript file'

  static flags = {
    help: flags.help({char: 'h'}),
    platform: flags.string({char: 'p', options: platformOptions}),
  }

  static args = [
    {
      name: 'platform',
      options: platformOptions,
    },
  ]

  static examples = [
    '$ hypi generate angular',
    '$ hypi generate -p=angular',
    '$ hypi generate --platform=angular',
  ]

  async run() {
    const {args, flags} = this.parse(Generate)

    const hypiService = new HypiService()

    if (!args.platform && !flags.platform) {
      this.error(messages.syncCommand.selectPlatform + ' ' + platformOptions)
    }
    const platform = args.platform ?? flags.platform

    // check .hypi folder exists
    const checkDotHypiExists = await hypiService.checkHypiFolder()
    if (checkDotHypiExists.error) this.error(checkDotHypiExists.error)

    // make sure .hypi/full_schema.graphql file exists
    const checkGeneratedSchemaFile = await hypiService.checkGeneratedSchemaFile()
    if (checkGeneratedSchemaFile.error) this.error(checkGeneratedSchemaFile.error)

    // check which platform
    const platformContext = new Context(new FlutterService())

    let generationType = ''

    if (platform === Platforms.Vuejs) {
      const vueGenTypeResponse: any = await inquirer.prompt([
        {
          name: 'generationType',
          message: messages.generateCommand.generationType,
          type: 'list',
          choices: generationTypes,
        },
      ])
      generationType = vueGenTypeResponse.generationType
    }

    switch (platform) {
    case Platforms.Flutter: {
      platformContext.setPlatform(new FlutterService())
      break
    }
    case Platforms.Reactjs: {
      platformContext.setPlatform(new ReactjsService())
      break
    }
    case Platforms.Angular: {
      platformContext.setPlatform(new AngularService())
      break
    }
    case Platforms.Vuejs: {
      const options: VuejsOptions = {generationType}
      platformContext.setPlatform(new VuejsService(options))
      break
    }
    default: {
      break
    }
    }
    cli.action.start(messages.generateCommand.generateProcess)

    const result = await platformContext.validate()
    if (result.message) {
      this.error(result.message)
    }

    const genResult = await platformContext.generate()
    this.log(genResult)

    cli.action.stop()
  }
}
