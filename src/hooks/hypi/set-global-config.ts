import {IConfig} from '@oclif/config'
import UserService from '../../hypi/services/user-service'

const config_hook = async function (options: any) {
  if (options.id === 'login' || options.id === 'config') {
    const oclifConfig: IConfig = options.config
    UserService.saveCliConfig(oclifConfig)
  }
}

export default config_hook
