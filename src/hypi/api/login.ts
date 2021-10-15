import AxiosConnection from '../axios-alpha'
import {messages} from '../helpers/messages'

const hypiLogin = async (email: string, password: string) => {
  let response
  try {
    response = await AxiosConnection.getAxios().post('/auth/login', {
      email: email,
      password: password,
    })
    const data = await response.data

    if (!data.data || data.data.errorCode) {
      return {error: messages.loginCommand.invalidEmailOrPassword}
    }
    return data.data
  } catch (error) {
    return {error: error}
  }
}
export default hypiLogin
