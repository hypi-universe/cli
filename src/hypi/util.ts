
import * as fs from 'fs-extra'
import * as path from 'path'
import * as YAML from 'yaml'

export default class Utils {

  static saveUserConfig(configDir: string, data: any) {
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

  static readUserSchema(schemaFile: string){
    return fs.readFileSync(schemaFile);
  }

  static getHypiDir() : string{
    const curDir = process.cwd();
    return path.join(curDir, '.hypi')
  }

  static readYamlFile(filePath: string) {
    if (!fs.existsSync(filePath)) {
      return { error: 'Failed to find ' + filePath + '' }
    }
    const appFile = fs.readFileSync(filePath, 'utf-8');
    try {
      return { data: YAML.parse(appFile) }
    } catch (e) {
      return { error: e.message }
    }
  }
}