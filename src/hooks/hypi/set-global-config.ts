import { IConfig } from '@oclif/config'
import * as path from 'path'
import Conf from 'conf';
import Utils from '../../hypi/helpers/utils'
import UserService from '../../hypi/services/user-service';


const config_hook = async function (oclifConfig: IConfig) {
  UserService.saveCliConfig(oclifConfig);
}

export default config_hook;