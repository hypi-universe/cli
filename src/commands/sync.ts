import { Command, flags } from '@oclif/command'
import * as fs from 'fs-extra'
import * as path from 'path'
import AppService from '../hypi/services/app-service'
import InstanceService from '../hypi/services/instance-service'
import Utils from '../hypi/util'
import * as YAML from 'yaml'

export default class Sync extends Command {
  static description = 'sync user local schema with hypi'

  static examples = [
    `$ hypi sync`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  async run() {
    const hypiDir = Utils.getHypiDir();

    if (!fs.existsSync(hypiDir)) {
      this.error('.hypi directory don\'t exists');
    }

    const appRead = Utils.readYamlFile(path.join(hypiDir, 'app.yaml'));
    const instanceRead = Utils.readYamlFile(path.join(hypiDir, 'instance.yaml'));

    if (appRead.error || instanceRead.error) {
      this.log(appRead.error ?? instanceRead.error);
      this.exit(1);
    }
    const appDoc = appRead.data;
    const instanceDoc = instanceRead.data;

    const appService = new AppService();

    const appResult = await appService.getApp(appDoc.name);
    if (appResult.error) {
      this.error(appResult.error);
    }

    let app;
    if (appResult.exists) {
      app = appResult.app;
    } else {
      const addApp = await appService.createApp(appDoc);
      if (addApp.error) {
        this.error(addApp.error);
      }
      const appResult = await appService.getApp(appDoc.name);
      app = appResult.app
    }
    
    instanceDoc.hypi = {"id" : app.hypi.id};
    const release = app.releases
                       .find((release: any) => release.name === instanceDoc.release.name);

    instanceDoc.release.hypi = {"id" : release.hypi.id};
    const instanceService = new InstanceService();
    const addInstance = await instanceService.createInstance(instanceDoc);
    if (addInstance.error) {
      this.error(addInstance.error);
    }
    appDoc.hypi = {"id" : app.hypi.id};
    appDoc.releases[0].hypi = {"id": release.hypi.id};

    this.log(appDoc);
    this.log(instanceDoc);

    const appYaml = YAML.stringify(appDoc);
    const intsanceYaml = YAML.stringify(instanceDoc);

    fs.writeFileSync(path.join(hypiDir, 'app.yaml'),appYaml);
    fs.writeFileSync(path.join(hypiDir, 'instance.yaml'), intsanceYaml);

  }
}
