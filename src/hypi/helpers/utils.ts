import * as fs from 'fs-extra'
import * as path from 'path'
import * as YAML from 'yaml'
import atob from 'atob'

export default class Utils {
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

  static addNodeToYamlDoc(doc: any, node: string, key: string, value: string) {
    if (!doc.hasIn([node, key])) {
      doc.addIn([node], doc.createPair(key, value))
    }
    return doc
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

  static enumToArray(enumme: any) {
    return Object.keys(enumme)
    .map(key => enumme[key])
  }

  static isDirEmpty(dir: any) {
    const files = fs.readdirSync(dir)
    return files.length === 0
  }
}
