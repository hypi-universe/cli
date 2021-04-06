
import * as fs from 'fs-extra'
import * as path from 'path'
import Conf from 'conf';
import { IConfig } from '@oclif/config'

export default class UserService {
  static config = new Conf({ projectName: 'hypi' });

  static saveUserConfig(data : any) {
    const configFile = this.config.get('cli-config-file') as string

    if (!fs.existsSync(configFile)) {
      fs.outputJSONSync(configFile, data, {
        spaces: 2,
        EOL: '\n'
      });
    } else {
      const userConfig = fs.readJSONSync(configFile)
      userConfig["domain"] = data.domain;
      userConfig["sessionToken"] = data.sessionToken;
      userConfig["sessionExpires"] = data.sessionExpires;
      fs.writeJsonSync(configFile, userConfig, {
        spaces: 2,
        EOL: '\n'
      });
    }
  }

  static saveCliConfig(oclifConfig: IConfig){
    this.config.set('cli-config-file', path.join(oclifConfig.configDir, 'config.json'))
  }

  static getUserDir() {
    const curDir = process.cwd();
    return path.join(curDir, '.hypi')
  }

  static isUserConfigExists() {
    const configFilePath = this.config.get("cli-config-file") as string;
    if (fs.existsSync(configFilePath)) {
      return true;
    }
    return false;
  }

  static getUserConfig() {
    const configFilePath = this.config.get("cli-config-file") as string;
    return fs.readJSONSync(configFilePath);
  }
}