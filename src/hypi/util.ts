
import * as fs from 'fs-extra'
import * as path from 'path'
import * as YAML from 'yaml'
import * as Conf from 'conf';

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

  static getUserConfig(){
    const config = new Conf();
    const configFilePath = config.get("cli-config-file") as string;
    return fs.readJSONSync(configFilePath);
  }

  static getAppUrl(){
    const config = new Conf();
    return config.get('app-url') as string;
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
  static deepCopy = <T>(target: T): T => {
    if (target === null) {
      return target;
    }
    if (target instanceof Date) {
      return new Date(target.getTime()) as any;
    }
    if (target instanceof Array) {
      const cp = [] as any[];
      (target as any[]).forEach((v) => { cp.push(v); });
      return cp.map((n: any) => Utils.deepCopy<any>(n)) as any;
    }
    if (typeof target === 'object' && target !== {}) {
      const cp = { ...(target as { [key: string]: any }) } as { [key: string]: any };
      Object.keys(cp).forEach(k => {
        cp[k] = Utils.deepCopy<any>(cp[k]);
      });
      return cp as T;
    }
    return target;
  };
}