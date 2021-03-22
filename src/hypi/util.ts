
import * as fs from 'fs-extra'
import * as path from 'path'

export default class Utils {

  static saveUserConfig(configDir: string, data) {
    const configFile = path.join(configDir, 'config.json');

    if (!fs.existsSync(configFile)) {
      fs.outputJSONSync(configFile, data, {
        spaces: 2,
        EOL: '\n'
      });
    } else {
      const userConfig = fs.readJSONSync(path.join(configDir, 'config.json'))
      // console.dir(userConfig)
      userConfig["sessionToken"] = data.sessionToken;
      userConfig["sessionExpires"] = data.sessionExpires;
      fs.writeJsonSync(configFile, userConfig, {
        spaces: 2,
        EOL: '\n'
      });
    }
  }
}