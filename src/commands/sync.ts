import {Command, flags} from '@oclif/command'
import AppService from '../hypi/services/app-service'
import InstanceService from '../hypi/services/instance-service'
import HypiService from '../hypi/services/hypi-service'
import Utils from '../hypi/helpers/utils'
import cli from 'cli-ux'
import UserService from '../hypi/services/user-service'
import SyncService from '../hypi/services/sync-service'
import {messages} from '../hypi/helpers/messages'
import {Platforms} from '../hypi/services/platform-service'
import PlatformService from '../hypi/services/platform-service'
import Context from '../hypi/services/platforms/context'
import FlutterService from '../hypi/services/platforms/flutter-service'
import ReactjsService from '../hypi/services/platforms/reactjs-service'

const platformOptions = PlatformService.platformsArray()

export default class Sync extends Command {
  static description = 'sync user local schema with hypi'

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
    '$ hypi sync angular',
    '$ hypi sync -p=angular',
    '$ hypi sync --platform=angular',
  ]

  async run() {
    // start the spinner
    cli.action.start('Sync Process')
    const {args, flags} = this.parse(Sync)

    if (!args.platform && !flags.platform) {
      this.error(messages.syncCommand.selectPlatform + ' ' + platformOptions)
    }

    const platform = args.platform ?? flags.platform

    if (!UserService.isUserConfigExists()) {
      this.error(messages.syncCommand.pleasLogin)
    }
    const syncService = new SyncService()

    // check .hypi folder exists
    // check app.yaml and instance.yaml exists
    const checkDotHypiExists = await syncService.checkHypiFolder()
    if (checkDotHypiExists.error) this.error(checkDotHypiExists.error)

    const appService = new AppService()
    const instanceService = new InstanceService()
    const hypiService = new HypiService()

    const readAppDocResponse = appService.readAppDoc()
    const readInstanceDoc = instanceService.readInstanceDoc()

    if (readAppDocResponse.error || readInstanceDoc.error) {
      this.error(readAppDocResponse.error ?? readInstanceDoc.error)
    }
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
    default: {
      break
    }
    }

    const result = await platformContext.validate()
    if (result.message) {
      this.error(result.message)
    }
    await platformContext.generate()
    this.exit()
    let appDoc = readAppDocResponse.data
    let instanceDoc = readInstanceDoc.data
    const appResult = await appService.createUserApp(Utils.deepCopy(appDoc))
    if (appResult.error) {
      this.error(appResult.error)
    }
    const app = appResult.app
    this.log(messages.syncCommand.appCreated + app.hypi.id)

    appDoc = appService.updateAppDocWithIds(appDoc, app)
    const release = app.releases
    .find((release: any) => release.name === appDoc.releases[0].name)
    instanceDoc.release.hypi = {id: release.hypi.id}

    const instanceResult = await instanceService.createAppInstance(Utils.deepCopy(instanceDoc))
    if (instanceResult.error) {
      this.error(instanceResult.error)
    }
    const instance = instanceResult.instance
    this.log(messages.syncCommand.instanceCreated + instance.hypi.id)

    instanceDoc = await instanceService.updateInstanceDocWithIds(instanceDoc, instance)

    await appService.updateAppYamlFile(appDoc)
    this.log('updateAppYamlFile done')
    await instanceService.updateInstanceYamlFile(instanceDoc)
    this.log('updateInstanceYamlFile done')

    const introspectionResult = await hypiService.doIntrospection()

    if (introspectionResult.error) {
      this.error(introspectionResult.error)
    }
    this.log('Introspection done')

    await platformContext.generate()

    cli.action.stop() // shows 'starting a process... done'
  }
}
