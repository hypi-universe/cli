import {flags} from '@oclif/command'
import AuthCommand from '../auth-base'

import AppService from '../hypi/services/app-service'
import InstanceService from '../hypi/services/instance-service'
import HypiService from '../hypi/services/hypi-service'
import Utils from '../hypi/helpers/utils'
import cli from 'cli-ux'
import {messages} from '../hypi/helpers/messages'

export default class Sync extends AuthCommand {
  static description = 'sync user local schema with hypi'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static examples = [
    '$ hypi sync',
  ]

  async run() {
    // start the spinner
    cli.action.start(messages.syncCommand.syncProcess)

    const hypiService = new HypiService()
    // check .hypi folder exists
    // check app.yaml and instance.yaml exists
    const checkDotHypiExists = await hypiService.checkHypiFolder()
    if (checkDotHypiExists.error) this.error(checkDotHypiExists.error)

    const appService = new AppService()
    const instanceService = new InstanceService()

    const readAppDocResponse = appService.readAppDoc()
    const readInstanceDoc = instanceService.readInstanceDoc()

    if (readAppDocResponse.error || readInstanceDoc.error) {
      this.error(readAppDocResponse.error ?? readInstanceDoc.error)
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
    this.log(messages.syncCommand.introspectionDone)

    cli.action.stop()
  }
}
