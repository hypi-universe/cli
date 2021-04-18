import introspectionQuery from '../graphql/queries/introspection'
import {buildClientSchema, printSchema} from 'graphql'
import * as fs from 'fs-extra'
import * as path from 'path'
import Utils from '../helpers/utils'

export default class HypiService {
  private full_schema_file_name = 'generated-schema.graphql'

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
}
