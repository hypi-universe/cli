import introspectionQuery from '../graphql/queries/introspection'
import {buildClientSchema, printSchema} from 'graphql'
import * as fs from 'fs-extra'
import * as path from 'path'
import Utils from '../helpers/utils'

export default class HypiService {
  private full_schema_file_name = 'generated-schema.graphql'

  private hypiDir = Utils.getHypiDir()

  async getSchema() {
    const schema = await introspectionQuery()
    .then((res: any) => {
      if (Utils.isObjectEmpty(res.data))
        return {error: 'Introspection result is empty', data: null}

      return {error: false, data: res.data}
    })
    .catch((error: any) => {
      return {error: error, data: {}}
    })
    return schema
  }

  async getSchemaSDL() {
    const introspectionSchemaResult = await this.getSchema()
    if (introspectionSchemaResult.error) return {error: introspectionSchemaResult.error, schema: null}

    const graphqlSchemaObj = buildClientSchema(introspectionSchemaResult.data)
    return {error: false, schema: printSchema(graphqlSchemaObj)}
  }

  async doIntrospection() {
    const hypiDir = Utils.getHypiDir()
    const schemaSDLRes = await this.getSchemaSDL()

    if (schemaSDLRes.error) return {error: schemaSDLRes.error}

    const schemaSDL = schemaSDLRes.schema
    const filePath = path.join(hypiDir, this.full_schema_file_name)
    try {
      await fs.writeFile(filePath, schemaSDL)
      return {error: false}
    } catch (error) {
      return {error: 'Failed to write introspection result to ' + filePath}
    }
  }

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

  doesGeneratedSchemaFileExists() {
    let schemaFileExists = false
    if (fs.existsSync(path.join(this.hypiDir, this.full_schema_file_name))) schemaFileExists = true
    return schemaFileExists
  }

  checkGeneratedSchemaFile() {
    if (!this.doesGeneratedSchemaFileExists()) return {error: this.full_schema_file_name + ' not exists, run hypi sync'}
    return {error: null}
  }
}
