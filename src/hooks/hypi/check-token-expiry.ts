/* eslint-disable no-console */
import UserService from '../../hypi/services/user-service'
import {messages} from '../../hypi/helpers/messages'

const check_expiry_hook = async function () {
  const userConfig = UserService.getUserConfig()

  if (userConfig.sessionExpires) {
    const exxpiryDate = userConfig.sessionExpires
    const currentDate = Math.floor(Date.now() / 1000)
    if (exxpiryDate < currentDate) {
      console.warn(messages.ExpiryHook.expiredMessage)
    }
  }
}

export default check_expiry_hook
