import {IConfig} from '@oclif/config'
import UserService from '../../hypi/services/user-service'

const config_hook = async function (oclifConfig: IConfig) {
  UserService.saveCliConfig(oclifConfig)
}

export default config_hook
