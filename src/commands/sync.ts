import { Command, flags } from '@oclif/command'
import * as fs from 'fs-extra'
import * as path from 'path'
import * as YAML from 'yaml'
import findApp from '../hypi/graphql/queries/findApp'

export default class Sync extends Command {
  static description = 'sync user local schema with hypi'

  static examples = [
    `$ hypi sync
`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  async run() {
    const curDir = process.cwd();
    const hypiDir = path.join(curDir, '.hypi')
    this.log(hypiDir);

    if (!fs.existsSync(hypiDir)) {
      this.error('.hypi directory don\'t exists');
    }
    const appFilePath = path.join(hypiDir, 'app.yaml')
    const instanceFilePath = path.join(hypiDir, 'instance.yaml')

    if (!fs.existsSync(appFilePath)) {
      this.error('Failed to find app.yaml configuration file inside .hypi');
    }
    if (!fs.existsSync(instanceFilePath)) {
      this.error('Failed to find instance.yaml configuration file inside .hypi');
    }
    const appFile = fs.readFileSync(appFilePath, 'utf-8');
    let appDoc;
    try {
      appDoc = YAML.parse(appFile);
    } catch (e) {
      this.log(e);
      this.exit(1);
    }

    const instanceFile = fs.readFileSync(instanceFilePath, 'utf-8');
    try {
      const instanceDoc = YAML.parse(instanceFile);
      this.log(instanceDoc);
    } catch (e) {
      this.log(e);
      this.exit(1);
    }
    //try to call FindApp query
    const findAppByName = findApp({ "arcql": "name = '" + appDoc.name + "'" });

    findAppByName.then(res => {
      console.log(res.data.find.edges.length)
      if(res.data.find.edges.length == 0)
      {
        this.log('App not exists, so will add it')
      }else{
        this.log('App already exists')
      }
    })
      .catch(err => {
        this.error('Failed');
        this.exit();
      })
  }
}
