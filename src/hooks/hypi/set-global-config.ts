import { Hook, IConfig, Config } from '@oclif/config'
import * as fs from 'fs-extra'
import * as path from 'path'
import * as YAML from 'yaml'


const hook = async function (config: IConfig) {
  //add options.config.configDir to hypi.yaml file 
  const appFilePath = path.join('./src/hypi/', 'config.yaml')
  if (fs.existsSync(appFilePath)) {
    const appFile = fs.readFileSync(appFilePath, 'utf-8');
    const appDoc = YAML.parse(appFile);
    appDoc.configDir = config.configDir;
    fs.writeFileSync(appFilePath, YAML.stringify(appDoc));
  }
}

export default hook;