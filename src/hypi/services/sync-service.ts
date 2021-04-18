import * as fs from 'fs-extra'
import * as path from 'path'
import Utils from '../helpers/utils'

export default class SyncService {
  private hypiDir = Utils.getHypiDir()

  doesDotHypiFolderExists() {
    let dirExists = false
    if (fs.existsSync(this.hypiDir)) dirExists = true
    return dirExists
  }

  checkAppFile() {
    const readAppYaml = Utils.readYamlFile(path.join(this.hypiDir, 'app.yaml'))
    if (!readAppYaml.exists) return {error: 'app.yaml not exists'}
    if (!readAppYaml.error && !readAppYaml.data) return {error: 'app.yaml is empty'}
    if (readAppYaml.error) return {error: 'Error reading app.yaml'}

    return {error: null}
  }

  checkInstanceFile() {
    const readInstanceYaml = Utils.readYamlFile(path.join(this.hypiDir, 'instance.yaml'))
    if (!readInstanceYaml.exists) return {error: 'instance.yaml not exists'}
    if (!readInstanceYaml.error && !readInstanceYaml.data) return {error: 'instance.yaml is empty'}
    if (readInstanceYaml.error) return {error: 'Error reading instance.yaml'}

    return {error: null}
  }

  doesSchemaFileExists() {
    let schemaFileExists = false
    if (fs.existsSync(path.join(this.hypiDir, 'schema.graphql'))) schemaFileExists = true
    return schemaFileExists
  }

  async checkHypiFolder() {
    if (!this.doesDotHypiFolderExists()) return {error: '.hypi folder not exists, run hypi init'}

    const checkAppFile = this.checkAppFile()
    if (checkAppFile.error) return {error: checkAppFile.error}

    const checkInstanceFile = this.checkInstanceFile()
    if (checkInstanceFile.error) return {error: checkInstanceFile.error}

    if (!this.doesSchemaFileExists()) return {error: 'schema.graphql not exists'}
    return {error: null}
  }
}
