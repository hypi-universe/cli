
import CustomizedApolloClient from './apollo-client';
import UserService from '../services/user-service';
import Utils from '../helpers/utils';
import * as path from 'path'

export default class HypiClient {

  static getClientWithUserDomain() {
    //domain from config
    const userConfig = UserService.getUserConfig();
    return new CustomizedApolloClient({ domain: userConfig.domain }).getApolloClient();
  }
  static getClientWithInstanceDomain() {
    //domain from instance.yaml

    let instanceRead;
    try {
      const hypiDir = Utils.getHypiDir();
      instanceRead = Utils.readYamlFile(path.join(hypiDir, 'instance.yaml'));
    } catch (error) {
      console.log('cant read instance.yaml for client domain');
      return null;
    }

    return new CustomizedApolloClient({ domain: instanceRead.data.domain }).getApolloClient();
  }

}