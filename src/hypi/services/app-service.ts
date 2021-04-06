import findAppQuery from '../graphql/queries/find-app'
import upsertMutation from '../graphql/mutations/upsert'
import * as fs from 'fs-extra'
import * as path from 'path'
import Utils from '../utils'
import * as YAML from 'yaml'
import UserService from './user-service';

export default class AppService {

  private app_file_name = 'app.yaml';

  async findAppByName(name: string) {
    try {
      const res = await findAppQuery({ "arcql": "name = '" + name + "'" });
      if (res.data.find.edges.length == 0) {
        return { 'error': null, 'data': null };
      } else {
        return { 'error': null, 'data': res.data.find.edges[0].node };
      }
    } catch (err) {
      return { 'error': err, 'data': null };
    }
  }

  async checkAppExists(name: string) {
    const response = await this.findAppByName(name);
    if (response.error) {
      return { 'error': response.error, 'exists': null };
    }
    if (!response.data) {
      return { 'error': null, 'exists': false };
    } else {
      return { 'error': null, 'exists': true, 'app': response.data };
    }
  }

  async createApp(values: any) {
    try {
      const resposne = await upsertMutation(values);
      if (resposne.errors) {
        const errorMessages = resposne.errors.map((error: any) => {
          return error.message;
        }).concat();

        return { 'error': errorMessages, data: null };
      } else {
        return { 'error': null, data: resposne.data.upsert[0] };
      }
    } catch (err) {
      return { 'error': err.message, data: null };
    }
  }

  readAppDoc() {
    const hypiDir = Utils.getHypiDir();
    if (!fs.existsSync(hypiDir)) {
      return { 'error': '.hypi directory don\'t exists' };
    }
    const appRead = Utils.readYamlFile(path.join(hypiDir, this.app_file_name));

    if (appRead.error) {
      return { 'error': appRead.error };
    }
    return { 'error': null, 'data': appRead.data };
  }

  async createUserApp(appDoc: any) {

    const checkResult = await this.checkAppExists(appDoc.name);
    if (checkResult.error) {
      return { 'error': checkResult.error, 'app': null };
    }
    if (checkResult.exists) {
      appDoc.hypi = { "id": checkResult.app.hypi.id }
    }

    appDoc = this.replaceAppTypesWithSchematext(appDoc);
    const values = {
      "values": {
        "App": appDoc
      }
    }
    const addApp = await this.createApp(values);
    if (addApp.error) {
      return { 'error': addApp.error };
    }
    const appResult = await this.findAppByName(appDoc.name);
    return { 'error': null, 'app': appResult.data }
  }

  replaceAppTypesWithSchematext(appDoc: any) {
    const configDir = UserService.getUserDir() as string;

    const releases = appDoc.releases;
    appDoc.releases.forEach((release: any, index: number) => {
      const schemaFile = path.join(configDir, release.schema.types);
      const schema = fs.readFileSync(schemaFile, 'utf8')
      appDoc.releases[index].schema.types = schema;
    });

    return appDoc;
  }

  updateAppDocWithIds(appDoc: any, app: any) {
    const release = app.releases
      .find((release: any) => release.name === appDoc.releases[0].name);
    appDoc.hypi = { "id": app.hypi.id };
    appDoc.releases[0].hypi = { "id": release.hypi.id };
    return appDoc;
  }

  async updateAppYamlFile(appDoc: any) {
    const hypiDir = Utils.getHypiDir();
    const appYaml = YAML.stringify(appDoc);
    await fs.writeFile(path.join(hypiDir, this.app_file_name), appYaml);
  }
}