import { Command, flags } from '@oclif/command'
import AppService from '../hypi/services/app-service'
import InstanceService from '../hypi/services/instance-service'
import HypiService from '../hypi/services/hypi-service'
import Utils from '../hypi/util'
import cli from 'cli-ux'
var shell = require('shelljs');

export default class Sync extends Command {
  static description = 'sync user local schema with hypi'

  static examples = [
    `$ hypi sync`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  async run() {
    // start the spinner
    cli.action.start('Sync Process')

    if (!Utils.isUserConfigExists()) {
      this.error('Please login first');
    }

    //check .hypi folder exists
    //check app.yaml and instance.yaml exists

    const appService = new AppService();
    const instanceService = new InstanceService();

    const readAppDocResponse = appService.readAppDoc();
    const readInstanceDoc = instanceService.readInstanceDoc();

    if (readAppDocResponse.error || readInstanceDoc.error) {
      this.error(readAppDocResponse.error ?? readInstanceDoc.error);
    }

    let appDoc = readAppDocResponse.data;
    let instanceDoc = readInstanceDoc.data;

    const appResult = await appService.createUserApp(Utils.deepCopy(appDoc));

    if (appResult.error) {
      this.error(appResult.error);
    }
    const app = appResult.app;
    this.log('App created with id : ' + app.hypi.id);

    appDoc = appService.updateAppDocWithIds(appDoc, app);
    const release = app.releases
      .find((release: any) => release.name === appDoc.releases[0].name);
    instanceDoc.release.hypi = { "id": release.hypi.id };

    const instanceResult = await instanceService.createAppInstance(instanceDoc);
    if (instanceResult.error) {
      this.error(instanceResult.error);
    }
    const instance = instanceResult.instance;
    this.log('Instance created with id : ' + instance.hypi.id);

    instanceDoc = instanceService.updateInstanceDocWithIds(instanceDoc, instance);

    appService.updateAppYamlFile(appDoc);
    instanceService.updateInstanceYamlFile(instanceDoc);

    const hypiService = new HypiService();
    hypiService.doIntrospection();

    const writeDependcies = Utils.writeToFlutterPackageManager();
    if(writeDependcies.error){
      this.error('Failed to write dependcies to pubspec.yaml, try again')
    }

    if (shell.exec('flutter pub run build_runner build').code !== 0) {
      shell.echo('Error: Make sure flutter is installed');
      shell.exit(1);
    }

    cli.action.stop() // shows 'starting a process... done'
  }
}
