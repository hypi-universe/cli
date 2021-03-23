import findAppQuery from '../graphql/queries/find-instance'
import upsertMutation from '../graphql/mutations/upsert'

export default class InstanceService {

  async findInstanceByName(name: string) {
    return await findAppQuery({ "arcql": "name = '" + name + "'" });
  }

  getInstance(name: string): any {
    return this.findInstanceByName(name)
      .then(res => {
        if (res.data.find.edges.length == 0) {
          return { 'exists': false }
        } else {
          return { 'exists': true, 'instance': res.data.find.edges[0].node }
        }
      })
      .catch(err => {
        return { 'error': err }
      })
  }

  async createInstance(releaseDoc: any) {
    const release = {
      "values": {
        "AppInstance": [
          releaseDoc
        ]
      }
    }

    console.log(release);
    return upsertMutation(release)
      .then(resposne => {
        if (resposne.errors) {
          const errorMessages = resposne.errors.map(error => {
            return error.message;
          }).concat();

          return { 'error': errorMessages, data: null }
        } else {
          return { 'saved': true, data: resposne.data.upsert[0] }
        }
      })
      .catch(err => {
        console.log('errrrror')
        return { 'error': err.message, data: null }
      })
  }

}