import axios from 'axios'
import UserService from './services/user-service'

// read base url from hypi.yaml
const instance = axios.create({
  baseURL: UserService.getApiDomain(),
  headers: {
    accept: 'application/json, text/plain, */*',
    'content-type': 'application/json',
  },
})

export default instance
