
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
  static isUserConfigExists() {
    const config = new Conf();
    const configFilePath = config.get("cli-config-file") as string;
    if (fs.existsSync(configFilePath)) {
      return true;
    }
    return false;
  }

  static getUserConfig() {
    const config = new Conf();
    const configFilePath = config.get("cli-config-file") as string;
    return fs.readJSONSync(configFilePath);
  }

  static getAppUrl() {
    const config = new Conf();
    return config.get('app-url') as string;
  }

  static readUserSchema(schemaFile: string) {
    return fs.readFileSync(schemaFile);
  }

  static getHypiDir(): string {
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

  static writeToFlutterPackageManager() {
    const read_flutter_dependencies = this.readYamlFile('./src/hypi/flutter-dependencies.yaml');
    if (read_flutter_dependencies.error) {
      return { error: 'Failed to read  ./src/hypi/flutter-dependencies.yaml' }
    }
    const flutter_dependencies = read_flutter_dependencies.data;

    const filePath = path.join(process.cwd(), 'pubspec.yaml')
    if (!fs.existsSync(filePath)) {
      return { error: 'Failed to find ~/pubspec.yaml' }
    }
    const file = fs.readFileSync(filePath, 'utf8')
    let doc = YAML.parseDocument(file)

    Object.entries(flutter_dependencies.dependencies).forEach(([key, value]) => {
      this.addNodeToYamlDoc(doc, 'dependencies', key, String(value));
    });
    Object.entries(flutter_dependencies.dev_dependencies).forEach(([key, value]) => {
      this.addNodeToYamlDoc(doc, 'dev_dependencies', key, String(value));
    });
    try {
      fs.writeFileSync(filePath, String(doc));
      return { 'error': false }
    }
    catch (e) {
      if (!fs.existsSync(filePath)) {
        return { error: e.message }
      }
    }
  }
  static addNodeToYamlDoc(doc: any, node: string, key: string, value: string) {
    if (!doc.hasIn([node, key])) {
      console.log('ok')
      doc.addIn([node], doc.createPair(key, value));
    } else {
      console.log(key + ' already exists');
    }
    return doc;
  }
}