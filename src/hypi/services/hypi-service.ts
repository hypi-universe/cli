import introspectionQuery from '../graphql/queries/introspection'
import { buildClientSchema, printSchema } from "graphql";
import * as fs from 'fs-extra'
import * as path from 'path'
import Utils from '../utils'

export default class HypiService {

  private full_schema_file_name = 'generated-schema.graphql';

  async getSchema() {
    return await introspectionQuery()
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => {
        return {};
      });;
  }

  async getSchemaSDL() {
    const introspectionSchemaResult = await this.getSchema()
    const graphqlSchemaObj = buildClientSchema(introspectionSchemaResult);
    return printSchema(graphqlSchemaObj);
  }

  async doIntrospection() {
    const hypiDir = Utils.getHypiDir();
    const schemaSDL = await this.getSchemaSDL();
    const filePath = path.join(hypiDir, this.full_schema_file_name);
    try {
      await fs.writeFile(filePath, schemaSDL)
      console.log('write to '+ filePath)
      return { 'success': filePath };
    } catch (error) {
      console.log('error to write to '+ filePath);
      return { 'error': 'Failed to write introspection result to ' + filePath };
    }
  }
}