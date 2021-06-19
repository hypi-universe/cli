
import * as fs from 'fs-extra'
import * as path from 'path'
import Conf from 'conf'
import {IConfig} from '@oclif/config'

import HypiConfig from '../config'

export default class UserService {
  static config = new Conf({projectName: 'hypi'})

  static saveUserConfig(data: any) {
    const configFile = this.config.get('cli-config-file') as string

    if (fs.existsSync(configFile)) {
      const userConfig = fs.readJSONSync(configFile)
      userConfig.domain = data.domain
      userConfig.sessionToken = data.sessionToken
      userConfig.sessionExpires = data.sessionExpires
      fs.writeJsonSync(configFile, userConfig, {
        spaces: 2,
        EOL: '\n',
      })
      return
    }
    if (!fs.existsSync(configFile)) {
      fs.outputJSONSync(configFile, data, {
        spaces: 2,
        EOL: '\n',
      })
    }
  }

  static saveCliConfig(oclifConfig: IConfig) {
    this.config.set('cli-config-file', path.join(oclifConfig.configDir, 'config.json'))
  }

  static saveApiDomainConfig(apiDomain: string) {
    this.config.set('api-domain', apiDomain)
  }

  static getApiDomain() {
    const apiDomain = this.config.get('api-domain') as string
    return apiDomain ? apiDomain : HypiConfig.default_api_domain
  }

  static getUserDir() {
    const curDir = process.cwd()
    return path.join(curDir, '.hypi')
  }

  static isUserConfigExists() {
    const configFilePath = this.config.get('cli-config-file') as string
    if (fs.existsSync(configFilePath)) {
      return true
    }
    return false
  }

  static deleteUserConfigFile() {
    const configFilePath = this.config.get('cli-config-file') as string
    try {
      fs.unlinkSync(configFilePath)
      return true
    } catch (error) {
      return false
    }
  }

  static isUserHypiFolderExists() {
    const configFilePath = this.config.get('cli-config-file') as string
    if (fs.existsSync(configFilePath)) {
      return true
    }
    return false
  }

  static getUserConfig() {
    const configFilePath = this.config.get('cli-config-file') as string
    return fs.readJSONSync(configFilePath)
  }
}
