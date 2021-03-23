import findAppQuery from '../graphql/queries/find-app'
import upsertMutation from '../graphql/mutations/upsert'
import * as fs from 'fs-extra'
import * as Conf from 'conf';
import * as path from 'path'

export default class AppService {

  async findAppByName(name: string) {
    return await findAppQuery({ "arcql": "name = '" + name + "'" });
  }

  getApp(name: string): any {
    return this.findAppByName(name)
      .then(res => {
        if (res.data.find.edges.length == 0) {
          return { 'exists': false }
        } else {
          return { 'exists': true, 'app': res.data.find.edges[0].node }
        }
      })
      .catch(err => {
        return { 'error': err }
      })
  }

  async createApp(appDoc: any) {
    const config = new Conf();
    const configDir = config.get("hypi-user-dir") as string;

    const releases = appDoc.releases;
    appDoc.releases.forEach((release: any, index: number) => {
      const schemaFile = path.join(configDir, release.schema.types);
      const schema = fs.readFileSync(schemaFile, 'utf8')
      appDoc.releases[index].schema.types = schema;
    });

    const app = {
      "values": {
        "App": appDoc
      }
    }

    return upsertMutation(app)
      .then(resposne => {
        if (resposne.errors) {
          const errorMessages = resposne.errors.map(error => {
            return error.message;
          }).concat();

          return { 'error': errorMessages , data: null}
        } else {
          return { 'saved': true, data: resposne.data.upsert[0] }
        }
      })
      .catch(err => {
        return { 'error': err.message, data: null }
      })
  }

}