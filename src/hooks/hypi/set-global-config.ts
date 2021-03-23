import { IConfig } from '@oclif/config'
import * as path from 'path'
import * as Conf from 'conf';
import Utils from '../../hypi/util'


const config_hook = async function (oclifConfig: IConfig) {

  const config = new Conf();

  config.set('hypi-user-dir', Utils.getHypiDir());
  config.set('cli-config-dir', oclifConfig.configDir)
  config.set('cli-config-file', path.join(oclifConfig.configDir, 'config.json'))
  config.set('app-url', 'https://api.alpha.hypi.dev')
}

export default config_hook;