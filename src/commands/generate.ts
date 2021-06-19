
import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'

import {messages} from '../hypi/helpers/messages'
import {Platforms} from '../hypi/services/platform-service'
import PlatformService from '../hypi/services/platform-service'
import UserService from '../hypi/services/user-service'
import HypiService from '../hypi/services/hypi-service'
import Context from '../hypi/services/platforms/context'
import FlutterService from '../hypi/services/platforms/flutter-service'
import ReactjsService from '../hypi/services/platforms/reactjs-service'
import AngularService from '../hypi/services/platforms/angular-service'

const platformOptions = PlatformService.platformsArray()

export default class Generate extends Command {
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
    cli.action.start('Generate Process')
    const {args, flags} = this.parse(Generate)

    // make sure user is logged in
    if (!UserService.isUserConfigExists()) {
      this.error(messages.syncCommand.pleasLogin)
    }
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
    default: {
      break
    }
    }

    const result = await platformContext.validate()
    if (result.message) {
      this.error(result.message)
    }

    await platformContext.generate()

    cli.action.stop()
  }
}