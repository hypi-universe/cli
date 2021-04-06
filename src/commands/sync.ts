import { Command, flags } from '@oclif/command'
import AppService from '../hypi/services/app-service'
import InstanceService from '../hypi/services/instance-service'
import HypiService from '../hypi/services/hypi-service'
import Utils from '../hypi/utils'
import cli from 'cli-ux'
import UserService from '../hypi/services/user-service'
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

    if (!UserService.isUserConfigExists()) {
      this.error('Please login first');
    }
    //check .hypi folder exists
    //check app.yaml and instance.yaml exists

    const appService = new AppService();
    const instanceService = new InstanceService();
    const hypiService = new HypiService();

    const readAppDocResponse = appService.readAppDoc();
    const readInstanceDoc = instanceService.readInstanceDoc();

    if (readAppDocResponse.error || readInstanceDoc.error) {
      this.error(readAppDocResponse.error ?? readInstanceDoc.error);
    }
    const checkDependciesExists = await Utils.doesFlutterDependciesExists();
    if(checkDependciesExists.error){
      this.error(checkDependciesExists.message);
    }
    if (checkDependciesExists.missed) {
      this.error(checkDependciesExists.message);
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

    instanceDoc = await instanceService.updateInstanceDocWithIds(instanceDoc, instance);

    await appService.updateAppYamlFile(appDoc);
    this.log('updateAppYamlFile done')
    await instanceService.updateInstanceYamlFile(instanceDoc);
    this.log('updateInstanceYamlFile done')

    const introspectionResult = await hypiService.doIntrospection();

    if (introspectionResult.error) {
      this.error(introspectionResult.error);
    }
    this.log('Introspection done')

    this.log('write to pubspec.yaml done')
    this.log('Running flutter pub get')
    shell.exec('flutter pub get', { silent: true }, function (code: any, stdout: any, stderr: any) {
      // console.log('Exit code:', code);
      stdout ? console.log('Program output:', stdout) : null;
      stderr ? console.log('Program stderr:', stderr) : null;

      if (code === 0) {
        console.log('Running flutter pub run build_runner build --delete-conflicting-outputs')

        shell.exec('flutter pub run build_runner build --delete-conflicting-outputs', { silent: true }, function (code: any, stdout: any, stderr: any) {
          stdout ? console.log('Program output:', stdout) : null;
          stderr ? console.log('Program stderr:', stderr) : null;
          cli.action.stop() // shows 'starting a process... done'
        });
      }
    });
  }
}
