import axios from 'axios'
import UserService from './services/user-service'

class AxiosConnection {
  static getAxios() {
    return axios.create({
      baseURL: UserService.getApiDomain(),
      headers: {
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json',
      },
    })
  }
}

export default AxiosConnection
