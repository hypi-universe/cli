import {Command, flags} from '@oclif/command'
import AppService from '../hypi/services/app-service'
import InstanceService from '../hypi/services/instance-service'
import HypiService from '../hypi/services/hypi-service'
import Utils from '../hypi/helpers/utils'
import cli from 'cli-ux'
import UserService from '../hypi/services/user-service'
import SyncService from '../hypi/services/sync-service'
import {messages} from '../hypi/helpers/messages'

const shell = require('shelljs')

export default class Sync extends Command {
  static description = 'sync user local schema with hypi'

  static examples = [
    '$ hypi sync',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    // start the spinner
    cli.action.start('Sync Process')

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
    const checkDependciesExists = await Utils.doesFlutterDependciesExists()
    if (checkDependciesExists.error) {
      this.error(checkDependciesExists.message)
    }
    if (checkDependciesExists.missed) {
      this.error(checkDependciesExists.message)
    }
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

    this.log('Running flutter pub run build_runner build --delete-conflicting-outputs')

    shell.exec('flutter pub run build_runner build --delete-conflicting-outputs', {silent: true}, function (code: any, stdout: any, stderr: any) {
      // eslint-disable-next-line no-console
      stdout ? console.log('Program output:', stdout) : null
      // eslint-disable-next-line no-console
      stderr ? console.log('Program stderr:', stderr) : null
      cli.action.stop() // shows 'starting a process... done'
    })
  }
}
