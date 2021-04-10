import introspectionQuery from '../graphql/queries/introspection'
import { buildClientSchema, printSchema } from "graphql";
import * as fs from 'fs-extra'
import * as path from 'path'
import Utils from '../helpers/utils'

export default class HypiService {

  private full_schema_file_name = 'generated-schema.graphql';

  async getSchema() {
    return await introspectionQuery()
      .then((res: any) => {
        if (Utils.isObjectEmpty(res.data))
          return { error: 'Introspection result is empty', data: null };

        return { error: false, data: res.data };
      })
      .catch((err: any) => {
        console.log('introspect error')
        console.log(err)

        return { error: err, data: {} };
      });;
  }

  async getSchemaSDL() {
    const introspectionSchemaResult = await this.getSchema();
    if (introspectionSchemaResult.error) return { error: introspectionSchemaResult.error, schema: null };

    const graphqlSchemaObj = buildClientSchema(introspectionSchemaResult.data);
    return { error: false, schema: printSchema(graphqlSchemaObj) };
  }

  async doIntrospection() {
    const hypiDir = Utils.getHypiDir();
    const schemaSDLRes = await this.getSchemaSDL();

    if (schemaSDLRes.error) return { error: schemaSDLRes.error };

    const schemaSDL = schemaSDLRes.schema;
    const filePath = path.join(hypiDir, this.full_schema_file_name);
    try {
      await fs.writeFile(filePath, schemaSDL)
      console.log('write to ' + filePath)
      return { error: false };
    } catch (error) {
      console.log('error to write to ' + filePath);
      return { error: 'Failed to write introspection result to ' + filePath };
    }
  }
}