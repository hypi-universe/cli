
import CustomizedApolloClient from './apollo-client'
import UserService from '../services/user-service'
import Utils from '../helpers/utils'
import * as path from 'path'

export default class HypiClient {
  static getClientWithUserDomain() {
    // domain from config
    const userConfig = UserService.getUserConfig()
    return new CustomizedApolloClient({domain: userConfig.domain}).getApolloClient()
  }

  static getClientWithInstanceDomain() {
    // domain from instance.yaml

    let domain
    try {
      const hypiDir = Utils.getHypiDir()
      const instanceRead = Utils.readYamlFile(path.join(hypiDir, 'instance.yaml'))
      domain = instanceRead.data.domain
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('cant read instance.yaml for client domain')
    }

    return new CustomizedApolloClient({domain: domain}).getApolloClient()
  }
}
