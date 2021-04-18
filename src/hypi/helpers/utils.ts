import * as fs from 'fs-extra'
import * as path from 'path'
import * as YAML from 'yaml'
import atob from 'atob'
import flutterDependencies from '../flutter-dependencies'
import hypiConfig from '../config'

export default class Utils {
  static getAppUrl() {
    return hypiConfig.url
  }

  static getHypiDir(): string {
    const curDir = process.cwd()
    return path.join(curDir, '.hypi')
  }

  static readYamlFile(filePath: string) {
    if (!fs.existsSync(filePath)) {
      return {data: null, error: String('Failed to find ' + filePath), exists: false}
    }
    const appFile = fs.readFileSync(filePath, 'utf-8')
    try {
      return {data: YAML.parse(appFile), error: null, exists: true}
    } catch (error) {
      return {data: null, error: error.message, exists: true}
    }
  }

  static deepCopy = <T>(target: T): T => {
    if (target === null) {
      return target
    }
    if (target instanceof Date) {
      return new Date(target.getTime()) as any
    }
    if (Array.isArray(target)) {
      const cp = [] as any[]
      (target as any[]).forEach(v => {
        cp.push(v)
      })
      return cp.map((n: any) => Utils.deepCopy<any>(n)) as any
    }
    if (typeof target === 'object' && target !== {}) {
      const cp = {...(target as { [key: string]: any })} as { [key: string]: any }
      Object.keys(cp).forEach(k => {
        cp[k] = Utils.deepCopy<any>(cp[k])
      })
      return cp as T
    }
    return target
  }

  static async writeToFlutterPackageManager() {
    const filePath = path.join(process.cwd(), 'pubspec.yaml')
    if (!fs.existsSync(filePath)) {
      return {error: 'Failed to find ~/pubspec.yaml'}
    }
    const file = await fs.readFile(filePath, 'utf8')
    const doc = YAML.parseDocument(file)

    Object.entries(flutterDependencies.dependencies).forEach(([key, value]) => {
      this.addNodeToYamlDoc(doc, 'dependencies', key, String(value))
    })
    Object.entries(flutterDependencies.dev_dependencies).forEach(([key, value]) => {
      this.addNodeToYamlDoc(doc, 'dev_dependencies', key, String(value))
    })
    try {
      await fs.writeFile(filePath, String(doc))
      return {error: false}
    } catch (error) {
      if (!fs.existsSync(filePath)) {
        return {error: error.message}
      }
    }
    return {error: null}
  }

  static addNodeToYamlDoc(doc: any, node: string, key: string, value: string) {
    if (!doc.hasIn([node, key])) {
      doc.addIn([node], doc.createPair(key, value))
    }
    return doc
  }

  static async doesFlutterDependciesExists() {
    const filePath = path.join(process.cwd(), 'pubspec.yaml')
    if (!fs.existsSync(filePath)) {
      return {missed: false, error: true, message: 'Failed to find ~/pubspec.yaml'}
    }
    const file = await fs.readFile(filePath, 'utf8')
    const doc = YAML.parseDocument(file)
    const missingDependcies:
      { dependencies: string[]; dev_dependencies: string[] } =
      {dependencies: [], dev_dependencies: []}

    Object.entries(flutterDependencies.dependencies).forEach(([key, value]) => {
      if (!doc.hasIn(['dependencies', key])) {
        missingDependcies.dependencies.push(key + ': ' + value)
      }
    })
    Object.entries(flutterDependencies.dev_dependencies).forEach(([key, value]) => {
      if (!doc.hasIn(['dev_dependencies', key])) {
        missingDependcies.dev_dependencies.push(key + ': ' + value)
      }
    })

    if (missingDependcies.dependencies.length > 0 ||
      missingDependcies.dev_dependencies.length > 0) {
      return {missed: true, error: false, message: this.formatMissedDependciesMessage(missingDependcies)}
    }
    return {missed: false, error: false, message: ''}
  }

  static formatMissedDependciesMessage(missingDependcies: any) {
    let message = '[ERROR] please make sure that the following dependcies does exist in pubspec.yaml \n'
    if (missingDependcies.dependencies.length > 0) {
      message = message.concat('dependencies \n')
    }
    Object.entries(missingDependcies.dependencies).forEach(([, value]) => {
      message = message.concat('\t' + value + '\n')
    })

    if (missingDependcies.dev_dependencies.length > 0) {
      message = message.concat('dev_dependencies \n')
    }
    Object.entries(missingDependcies.dev_dependencies).forEach(([, value]) => {
      message = message.concat('\t' + value + '\n')
    })

    return message
  }

  static formatMessage(message: string, level: string) {
    switch (level) {
    case 'error':
      return '[ERROR] ' + message
      break
    case 'info':
      return '[INFO] ' + message
      break
    case 'warning':
      return '[WARNING] ' + message
      break
    default:
      return ''
    }
  }

  static async writeToFile(filePath: string, data: any) {
    try {
      await fs.writeFile(filePath, String(data))
      // console.log('write to ' + filePath)
      return {success: filePath, error: null}
    } catch (error) {
      return {success: null, error: 'Failed to write to ' + filePath}
    }
  }

  static isObjectEmpty(obj: any) {
    return Object.keys(obj).length === 0 || JSON.stringify(obj) === '{}'
  }

  static parseJwt(token: string) {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
    return JSON.parse(jsonPayload)
  }
}
