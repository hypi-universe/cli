
import * as fs from 'fs-extra'
import * as path from 'path'
import * as Conf from 'conf';

export default class UserService {
  static saveUserConfig(data : any) {
    const config = new Conf();
    const configFile = config.get('cli-config-file') as string

    if (!fs.existsSync(configFile)) {
      fs.outputJSONSync(configFile, data, {
        spaces: 2,
        EOL: '\n'
      });
    } else {
      const userConfig = fs.readJSONSync(configFile)
      userConfig["sessionToken"] = data.sessionToken;
      userConfig["sessionExpires"] = data.sessionExpires;
      fs.writeJsonSync(configFile, userConfig, {
        spaces: 2,
        EOL: '\n'
      });
    }
  }
}