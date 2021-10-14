import Command from '@oclif/command'

import UserService from './hypi/services/user-service'
import {messages} from './hypi/helpers/messages'

export default abstract class extends Command {
  async init() {
    if (!UserService.isUserConfigExists()) {
      this.error(messages.syncCommand.pleasLogin)
    }
    const userConfig = UserService.getUserConfig()
    if (userConfig.sessionExpires) {
      const exxpiryDate = userConfig.sessionExpires
      const currentDate = Math.floor(Date.now() / 1000)
      if (exxpiryDate < currentDate) {
        this.warn(messages.ExpiryHook.expiredMessage)
      }
    }
  }
}
