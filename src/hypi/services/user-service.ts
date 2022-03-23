/* eslint-disable no-negated-condition */

import * as fs from 'fs-extra'
import * as path from 'path'
import Conf from 'conf'
import {IConfig} from '@oclif/config'

import HypiConfig from '../config'

export default class UserService {
  static config = new Conf({projectName: 'hypi'})

  static CLI_CONFIG_FILE_NAME = 'cli-config-file'

  static saveLoginData(data: any) {
    this.saveToUserConfig(data)
  }

  static saveCliConfig(oclifConfig: IConfig) {
    if (!this.config.get(this.CLI_CONFIG_FILE_NAME))
      this.config.set(this.CLI_CONFIG_FILE_NAME, path.join(oclifConfig.configDir, 'config.json'))

    const configFilePath = this.config.get(this.CLI_CONFIG_FILE_NAME) as string
    if (!this.isUserConfigFolderExists()) {
      this.saveApiDomainConfig(HypiConfig.default_api_domain)
    } else {
      const userConfig = fs.readJSONSync(configFilePath)
      if (!userConfig.api_domain)
        this.saveApiDomainConfig(HypiConfig.default_api_domain)
    }
  }

  static saveApiDomainConfig(apiDomain: string) {
    this.saveToUserConfig({api_domain: apiDomain})
  }

  static saveToUserConfig(data: any) {
    const configFile = this.config.get(this.CLI_CONFIG_FILE_NAME) as string

    if (fs.existsSync(configFile)) {
      const userConfig = fs.readJSONSync(configFile)

      for (const [key, value] of Object.entries(data)) {
        userConfig[key] = value
      }
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

  static getApiDomain() {
    const userConfig = this.getUserConfig()
    const apiDomain = userConfig.api_domain
    return apiDomain ? apiDomain : HypiConfig.default_api_domain
  }

  static getUserDir() {
    const curDir = process.cwd()
    return path.join(curDir, '.hypi')
  }

  static isUserConfigExists() {
    const configFilePath = this.config.get(this.CLI_CONFIG_FILE_NAME) as string
    if (fs.existsSync(configFilePath)) {
      return true
    }
    return false
  }

  static deleteUserConfigFile() {
    const configFilePath = this.config.get(this.CLI_CONFIG_FILE_NAME) as string
    try {
      fs.unlinkSync(configFilePath)
      return true
    } catch (error) {
      return false
    }
  }

  static isUserConfigFolderExists() {
    const configFilePath = this.config.get(this.CLI_CONFIG_FILE_NAME) as string
    if (fs.existsSync(configFilePath)) {
      return true
    }
    return false
  }

  static getUserConfig() {
    const configFilePath = this.config.get(this.CLI_CONFIG_FILE_NAME) as string

    return fs.readJSONSync(configFilePath)
  }
}
