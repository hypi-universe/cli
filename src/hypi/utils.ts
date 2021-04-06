
import * as fs from 'fs-extra'
import * as path from 'path'
import * as YAML from 'yaml'
import Conf from 'conf';
import flutterDependencies from './flutter-dependencies';
import hypiConfig from './config';

export default class Utils {
 
  static getAppUrl() {
    return hypiConfig.url;
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

  static async writeToFlutterPackageManager() {
    const filePath = path.join(process.cwd(), 'pubspec.yaml')
    if (!fs.existsSync(filePath)) {
      return { error: 'Failed to find ~/pubspec.yaml' }
    }
    const file = await fs.readFile(filePath, 'utf8')
    let doc = YAML.parseDocument(file)

    Object.entries(flutterDependencies.dependencies).forEach(([key, value]) => {
      this.addNodeToYamlDoc(doc, 'dependencies', key, String(value));
    });
    Object.entries(flutterDependencies.dev_dependencies).forEach(([key, value]) => {
      this.addNodeToYamlDoc(doc, 'dev_dependencies', key, String(value));
    });
    try {
      await fs.writeFile(filePath, String(doc));
      return { error: false }
    }
    catch (e) {
      if (!fs.existsSync(filePath)) {
        return { error: e.message }
      }
    }
    return { error: null }
  }
  static addNodeToYamlDoc(doc: any, node: string, key: string, value: string) {
    if (!doc.hasIn([node, key])) {
      doc.addIn([node], doc.createPair(key, value));
    }
    return doc;
  }

  static async doesFlutterDependciesExists() {
    const filePath = path.join(process.cwd(), 'pubspec.yaml')
    if (!fs.existsSync(filePath)) {
      return { missed: false, error: true, message: 'Failed to find ~/pubspec.yaml' }
    }
    const file = await fs.readFile(filePath, 'utf8')
    let doc = YAML.parseDocument(file);
    let missingDependcies:
      { dependencies: string[]; dev_dependencies: string[]; }
      = { dependencies: [], dev_dependencies: [] };;

    Object.entries(flutterDependencies.dependencies).forEach(([key, value]) => {
      if (!doc.hasIn(['dependencies', key])) {
        missingDependcies.dependencies.push(key + ': ' + value);
      }
    });
    Object.entries(flutterDependencies.dev_dependencies).forEach(([key, value]) => {
      if (!doc.hasIn(['dev_dependencies', key])) {
        missingDependcies.dev_dependencies.push(key + ': ' + value);
      }
    });

    if (missingDependcies.dependencies.length > 0
      || missingDependcies.dev_dependencies.length > 0) {

      return { missed: true, error: false, message: this.formatMissedDependciesMessage(missingDependcies) }
    }
    return { missed: false, error: false, message: '' }
  }

  static formatMissedDependciesMessage(missingDependcies: any) {
    let message: string = '[ERROR] please make sure that the following dependcies does exist in pubspec.yaml \n';
    if (missingDependcies.dependencies.length > 0) {
      message = message.concat('dependencies \n')
    }
    Object.entries(missingDependcies.dependencies).forEach(([key, value]) => {
      message = message.concat('\t' + value + '\n')
    });

    if (missingDependcies.dev_dependencies.length > 0) {
      message = message.concat('dev_dependencies \n')
    }
    Object.entries(missingDependcies.dev_dependencies).forEach(([key, value]) => {
      message = message.concat('\t' + value + '\n')
    });

    return message;
  }

  static formatMessage(message: string, level: string) {
    switch (level) {
      case 'error':
        return '[ERROR] ' + message;
        break
      case 'info':
        return '[INFO] ' + message;
        break
      case 'warning':
        return '[WARNING] ' + message;
        break
      default:
        return '';
      // a complete example would need to have all the levels
    }
  }
}