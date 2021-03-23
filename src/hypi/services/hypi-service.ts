import introspectionQuery from '../graphql/queries/introspection'
import { buildClientSchema, printSchema } from "graphql";

export default class HypiService {

  async getSchema() {
    return await introspectionQuery()
      .then(res => {
        return res.data
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
}