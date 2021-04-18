import findAppInstanceQuery from '../graphql/queries/find-instance'
import upsertMutation from '../graphql/mutations/upsert'
import Utils from '../helpers/utils'
import * as path from 'path'
import * as fs from 'fs-extra'
import * as YAML from 'yaml'

export default class InstanceService {
  private fileName = 'instance.yaml'

  private hypiDir = Utils.getHypiDir()

  getFilePath() {
    return path.join(this.hypiDir, this.fileName)
  }

  async findInstance(arcql: string) {
    try {
      const res = await findAppInstanceQuery({arcql: arcql})
      if (res.data.find.edges.length === 0) {
        return {error: null, data: null}
      }
      return {error: null, data: res.data.find.edges[0].node}
    } catch (error) {
      return {error: error, data: null}
    }
  }

  async getInstanceByDomain(domain: string) {
    const arcql = "domain = '" + domain + "' SORT hypi.created DESC"
    const getInst = await this.findInstance(arcql)
    return getInst
  }

  async getInstanceById(id: string) {
    const arcql = "hypi.id = '" + id + "' SORT hypi.created DESC"
    const findInst = await this.findInstance(arcql)
    return findInst
  }

  async checkInstanceExists(domain: string) {
    const arcql = "domain = '" + domain + "' SORT hypi.created DESC"
    const findInstance = await this.findInstance(arcql)
    if (findInstance.error) {
      return {error: findInstance.error, exists: false, instance: null}
    }
    if (!findInstance.data) {
      return {error: null, exists: false, instance: null}
    }
    return {error: null, exists: true, instance: findInstance.data}
  }

  async createInstance(values: any) {
    try {
      const resposne = await upsertMutation(values)
      if (resposne.errors) {
        const errorMessages = resposne.errors.map((error: any) => {
          return error.message
        }).concat()

        return {error: errorMessages, data: null}
      }
      return {error: null, data: resposne.data.upsert[0]}
    } catch (error) {
      return {error: error.message, data: null}
    }
  }

  readInstanceDoc() {
    if (!fs.existsSync(this.hypiDir)) {
      return {error: '.hypi directory don\'t exists'}
    }
    const instanceRead = Utils.readYamlFile(this.getFilePath())

    if (instanceRead.error) {
      return {error: instanceRead.error}
    }
    return {error: null, data: instanceRead.data}
  }

  async createAppInstance(instanceDoc: any) {
    let instance
    if (instanceDoc && instanceDoc.domain && instanceDoc.domain !== '') {
      const checkResult = await this.checkInstanceExists(instanceDoc.domain)
      if (checkResult.error) {
        return {error: checkResult.error, instance: null}
      }
      if (checkResult.exists) {
        instance = checkResult.instance
        instanceDoc.hypi = {id: instance.hypi.id} // to update if instance exists
      }
    }
    if (instanceDoc.domain === '') {
      instanceDoc.domain = null
    }
    const values = {
      values: {
        AppInstance: [
          instanceDoc,
        ],
      },
    }
    const addInstance = await this.createInstance(values)
    if (addInstance.error) {
      return {error: addInstance.error, instance: null}
    }
    const instanceResult = await this.getInstanceById(addInstance.data.id)
    return {error: null, instance: instanceResult.data}
  }

  updateInstanceDocWithIds(instanceDoc: any, instance: any) {
    instanceDoc.hypi = {id: instance.hypi.id}
    instanceDoc.domain = instance.domain // have to test it(to update domain if its empty)

    return instanceDoc
  }

  async updateInstanceYamlFile(instanceDoc: any) {
    const intsanceYaml = YAML.stringify(instanceDoc)
    await fs.writeFile(this.getFilePath(), intsanceYaml)
  }

  async createInstanceFile(data: any) {
    const doc = new YAML.Document({
      domain: data.domain ? data.domain : null,
      release:
      {
        name: 'latest',
      },
    })
    const write = await Utils.writeToFile(this.getFilePath(), String(doc))
    return write
  }

  async createInstanceFileFromInstanceObject(instance: any) {
    const doc = new YAML.Document({
      domain: instance.domain,
      hypi: {id: instance.hypi.id},
      release:
      {
        name: instance.release.name,
        hypi: {id: instance.release.hypi.id},

      },
    })
    const writeInstanceToFile = await Utils.writeToFile(this.getFilePath(), String(doc))
    return writeInstanceToFile
  }
}
