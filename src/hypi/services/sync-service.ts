import * as fs from 'fs-extra'
import * as path from 'path'
import Utils from '../helpers/utils';

export default class SyncService {
  private hypiDir = Utils.getHypiDir();

  doesDotHypiFolderExists() {
    let dirExists = false;
    if (fs.existsSync(this.hypiDir)) dirExists = true;;
    return dirExists
  }

  doesAppFileExists() {
    const readAppYaml = Utils.readYamlFile(path.join(this.hypiDir, 'app.yaml'));
    return readAppYaml.exists && readAppYaml.data
  }

  doesInstanceFileExists() {
    const readInstanceYaml = Utils.readYamlFile(path.join(this.hypiDir, 'instance.yaml'));
    return readInstanceYaml.exists && readInstanceYaml.data;
  }

  doesSchemaFileExists() {
    let schemaFileExists = false;
    if (fs.existsSync(path.join(this.hypiDir, 'schema.graphql'))) schemaFileExists = true;
    return schemaFileExists;
  }

  doesDotHypiExists() {
    if (!this.doesDotHypiFolderExists()) return { error: '.hypi folder not exists' };
    if (!this.doesAppFileExists()) return { error: 'app.yaml not exists' };
    if (!this.doesInstanceFileExists()) return { error: 'instance.yaml not exists' };
    if (!this.doesSchemaFileExists()) return { error: 'schema.graphql not exists' };
    return {error: null}
  }

}