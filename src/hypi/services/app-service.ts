import findAppQuery from '../graphql/queries/find-app'
import upsertMutation from '../graphql/mutations/upsert'
import * as fs from 'fs-extra'
import * as path from 'path'
import Utils from '../helpers/utils'
import * as YAML from 'yaml'

export default class AppService {

  private fileName = 'app.yaml';
  private hypiDir = Utils.getHypiDir();

  getFilePath() {
    return path.join(this.hypiDir, this.fileName);
  }

  async findApp(arcql: string) {
    try {
      const res = await findAppQuery({ "arcql": arcql })
      if (res.data.find.edges.length == 0) {
        return { error: null, data: null }
      } else {
        return { error: null, data: res.data.find.edges[0].node }
      }
    } catch (err) {
      return { error: err, data: null }
    }
  }

  async findAppByName(name: string) {
    const arcql = "name = '" + name + "'";
    return await this.findApp(arcql);
  }

  async findAppByReleaseId(id: number) {
    const arcql = "releases.hypi.id = '" + id + "'";
    return await this.findApp(arcql);
  }

  async checkAppExists(name: string) {
    const response = await this.findAppByName(name);
    if (response.error) {
      return { error: response.error, exists: null };
    }
    if (!response.data) {
      return { error: null, exists: false };
    } else {
      return { error: null, exists: true, 'app': response.data };
    }
  }

  async createApp(values: any) {
    try {
      const resposne = await upsertMutation(values);
      if (resposne.errors) {
        const errorMessages = resposne.errors.map((error: any) => {
          return error.message;
        }).concat();

        return { error: errorMessages, data: null };
      } else {
        return { error: null, data: resposne.data.upsert[0] };
      }
    } catch (err) {
      return { error: err.message, data: null };
    }
  }

  readAppDoc() {
    if (!fs.existsSync(this.hypiDir)) {
      return { error: '.hypi directory don\'t exists' };
    }
    const appRead = Utils.readYamlFile(this.getFilePath());

    if (appRead.error) {
      return { error: appRead.error };
    }
    return { error: null, data: appRead.data };
  }

  async createUserApp(appDoc: any) {

    const checkResult = await this.checkAppExists(appDoc.name);
    if (checkResult.error) {
      return { error: checkResult.error, app: null };
    }
    if (checkResult.exists) {
      appDoc.hypi = { "id": checkResult.app.hypi.id }
      //if app already exists with the same release put id in release to update
      if (!appDoc.releases[0].hypi) {
        const release = checkResult.app.releases
          .find((release: any) => release.name === appDoc.releases[0].name);
          //an already exists release
        if (release) {
          appDoc.releases[0].hypi = { "id": release.hypi.id }
        }
      }
    }
    appDoc = await this.replaceAppTypesWithSchematext(appDoc);
    const values = {
      "values": {
        "App": appDoc
      }
    }
    const addApp = await this.createApp(values);
    if (addApp.error) {
      return { error: addApp.error };
    }
    const appResult = await this.findAppByName(appDoc.name);
    return { error: null, app: appResult.data }
  }

  replaceAppTypesWithSchematext(appDoc: any) {
    // const configDir = UserService.getUserDir() as string;

    const releases = appDoc.releases;
    appDoc.releases.forEach((release: any, index: number) => {
      const schemaFile = path.join(this.hypiDir, release.schema.types);
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
    const appYaml = YAML.stringify(appDoc);
    await fs.writeFile(this.getFilePath(), appYaml);
  }

  async createAppFile(data: any) {
    const doc = new YAML.Document({
      website: data.website,
      name: data.name,
      label: data.label,
      releases: [
        {
          name: 'latest',
          schema: { types: 'schema.graphql' },
          status: 'PUBLISHED',
          notes: 'latest version'
        }
      ]
    });
    return await Utils.writeToFile(this.getFilePath(), String(doc));
  }
  async createAppFileFromAppObject(app: any, release: any) {

    // const release = app.releases
    //   .find((release: any) => release.hypi.id === releaseId);


    const doc = new YAML.Document({
      website: app.website,
      name: app.name,
      label: app.label,
      hypi: { id: app.hypi.id },
      releases: [
        {
          name: release.name,
          schema: { types: 'schema.graphql' },
          status: release.status,
          notes: release.notes,
          hypi: { id: release.hypi.id },
        }
      ]
    });
    return await Utils.writeToFile(this.getFilePath(), String(doc));
  }
}