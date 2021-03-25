import findAppQuery from '../graphql/queries/find-instance'
import upsertMutation from '../graphql/mutations/upsert'
import Utils from '../util'
import * as path from 'path'
import * as fs from 'fs-extra'
import * as YAML from 'yaml'

export default class InstanceService {

  private instance_file_name = 'instance.yaml';

  async findInstance(arcql: string) {
    try {
      const res = await findAppQuery({ "arcql": arcql })
      if (res.data.find.edges.length == 0) {
        return { 'error': null, 'data': null }
      } else {
        return { 'error': null, 'data': res.data.find.edges[0].node }
      }
    } catch (err) {
      return { 'error': err, 'data': null }
    }
  }

  async getInstanceById(id: string) {
    const arcql = "hypi.id = '" + id + "' SORT hypi.created DESC"
    const findInstance = await this.findInstance(arcql);
    if (findInstance.error) {
      return { 'error': findInstance.error, 'data': null }
    }
    if (!findInstance.data) {
      return { 'error': null, 'data': null }
    } else {
      return { 'error': null, 'data': findInstance.data }
    }
  }

  async checkInstanceExists(domain: string) {
    const arcql = "domain = '" + domain + "' SORT hypi.created DESC"
    const findInstance = await this.findInstance(arcql)
    if (findInstance.error) {
      return { 'error': findInstance.error, 'exists': null }
    }
    if (!findInstance.data) {
      return { 'error': null, 'exists': false }
    } else {
      return { 'error': null, 'exists': true, 'instance': findInstance.data }
    }
  }

  async createInstance(values: any) {
    try {
      const resposne = await upsertMutation(values)
      if (resposne.errors) {
        const errorMessages = resposne.errors.map(error => {
          return error.message
        }).concat()

        return { 'error': errorMessages, data: null }
      } else {
        return { 'error': null, data: resposne.data.upsert[0] }
      }
    } catch (err) {
      return { 'error': err.message, data: null }
    }
  }


  readInstanceDoc() {
    const hypiDir = Utils.getHypiDir();
    if (!fs.existsSync(hypiDir)) {
      return { 'error': '.hypi directory don\'t exists' };
    }
    const instanceRead = Utils.readYamlFile(path.join(hypiDir, this.instance_file_name));

    if (instanceRead.error) {
      return { 'error': instanceRead.error };
    }
    return { 'error': null, 'data': instanceRead.data };
  }

  async createAppInstance(instanceDoc: any) {
    let instance;
    if (instanceDoc.domain != null) {
      const checkResult = await this.checkInstanceExists(instanceDoc.domain);
      if (checkResult.error) {
        return { 'error': checkResult.error, 'instance': null };
      }
      if (checkResult.exists) {
        instance = checkResult.instance
        instanceDoc.hypi = { "id": instance.hypi.id } //to update if instance exists
      }
    }
    const values = {
      "values": {
        "AppInstance": [
          instanceDoc
        ]
      }
    }
    const addInstance = await this.createInstance(values);
    if (addInstance.error) {
      return { 'error': addInstance.error, 'instance': null };
    }
    const instanceResult = await this.getInstanceById(addInstance.data.id);
    return { 'error': null, 'instance': instanceResult.data }
  }

  updateInstanceDocWithIds(instanceDoc: any, instance: any) {
    instanceDoc.hypi = { "id": instance.hypi.id }
    return instanceDoc;
  }


  updateInstanceYamlFile(instanceDoc: any) {
    const hypiDir = Utils.getHypiDir();
    const intsanceYaml = YAML.stringify(instanceDoc);
    fs.writeFileSync(path.join(hypiDir, this.instance_file_name), intsanceYaml);
  }
}