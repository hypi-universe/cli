import introspectionQuery from '../graphql/queries/introspection'
import { buildClientSchema, printSchema } from "graphql";
import * as fs from 'fs-extra'
import * as path from 'path'
import Utils from '../util'

export default class HypiService {

  private full_schema_file_name = 'full-schema.graphql';

  async getSchema() {
    return await introspectionQuery()
      .then(res => {
        return res.data;
      })
      .catch(err => {
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
    fs.writeFile(path.join(hypiDir, this.full_schema_file_name), schemaSDL)
  }
}