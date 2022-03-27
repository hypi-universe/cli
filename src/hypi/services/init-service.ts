import * as fs from 'fs-extra'
import * as path from 'path'

import Utils from '../helpers/utils'
import AppService from './app-service'
import InstanceService from './instance-service'
import {schemaTemplate} from '../graphql/schema.template.graphql'

export default class InitService {
  private hypiDir = Utils.getHypiDir()

  private appService = new AppService()

  private instanceService = new InstanceService()

  getSchemaFilePath() {
    return path.join(this.hypiDir, 'schema.graphql')
  }

  deleteHypiDir() {
    try {
      if (fs.existsSync(this.hypiDir))
        fs.rmSync(this.hypiDir, {recursive: true})
      return true
    } catch (error) {
      return false
    }
  }

  checkInitBefore() {
    let dirExists = false
    let appFileExists = false
    let instanceFileExists = false

    if (fs.existsSync(this.hypiDir)) dirExists = true

    const readAppYaml = Utils.readYamlFile(path.join(this.hypiDir, 'app.yaml'))
    if (readAppYaml.exists && readAppYaml.data) appFileExists = true

    const readInstanceYaml = Utils.readYamlFile(path.join(this.hypiDir, 'instance.yaml'))
    if (readInstanceYaml.exists && readInstanceYaml.data) instanceFileExists = true

    return dirExists || appFileExists || instanceFileExists
  }

  async doInit(data: any) {
    if (!fs.existsSync(this.hypiDir)) {
      fs.mkdirSync(this.hypiDir)
    }

    const createAppRes = await this.appService.createAppFile(data)
    const createInstanceRes = await this.instanceService.createInstanceFile(data)
    const createSchemaRes = await Utils.writeToFile(this.getSchemaFilePath(), schemaTemplate)

    if (createAppRes.error || createInstanceRes.error || createSchemaRes.error) {
      return {error: createAppRes.error ?? createInstanceRes.error ?? createSchemaRes.error}
    }
    return {error: null}
  }

  async doInitByDomain(domain: string) {
    if (!fs.existsSync(this.hypiDir)) {
      fs.mkdirSync(this.hypiDir)
    }

    const instanceResponse = await this.instanceService.checkInstanceExists(domain)
    if (instanceResponse.error) {
      return {error: instanceResponse.error}
    }
    if (!instanceResponse.exists) {
      return {error: 'No instance found with domain ' + domain}
    }
    const instance = instanceResponse.instance
    const release = instance.release
    const releaseId = release.hypi.id

    const appResponse = await this.appService.findAppByReleaseId(releaseId)

    if (appResponse.error) {
      return {error: appResponse.error}
    }
    if (appResponse.data.length === 0 || !appResponse.data) {
      return {error: 'App not found with release id ' + releaseId}
    }
    const app = appResponse.data

    const createAppRes = await this.appService.createAppFileFromAppObject(app, release)
    const createInstanceRes = await this.instanceService.createInstanceFileFromInstanceObject(instance)

    const schema = release.schema.types
    const createSchemaRes = await Utils.writeToFile(this.getSchemaFilePath(), schema)

    if (createAppRes.error || createInstanceRes.error || createSchemaRes.error) {
      return {error: createAppRes.error ?? createInstanceRes.error ?? createSchemaRes.error}
    }
    return {error: null}
  }
}
