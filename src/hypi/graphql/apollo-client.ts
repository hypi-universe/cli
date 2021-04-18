
import {ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat} from '@apollo/client/core'
import fetch from 'cross-fetch'
import Utils from '../helpers/utils'
import UserService from '../services/user-service'

export default class CustomizedApolloClient {
  private domain = ''

  constructor(options?: any) {
    if (options && options.domain) this.domain = options.domain
  }

  getApolloClient() {
    // if (!UserService.isUserConfigExists()) {
    //   return null
    // }

    const httpLink = this.getHttpLink()
    const authMiddleware = this.getMiddleware()

    return new ApolloClient({
      cache: new InMemoryCache(),
      link: concat(authMiddleware, httpLink),
    })
  }

  getHttpLink() {
    const url = Utils.getAppUrl()
    return new HttpLink({uri: url + '/graphql', fetch: fetch as any})
  }

  getMiddleware() {
    const userConfig = UserService.getUserConfig()
    return new ApolloLink((operation, forward) => {
      // add the authorization to the headers
      operation.setContext({
        headers: {
          authorization: userConfig.sessionToken || null,
          'hypi-domain': this.domain,
        },
      })
      return forward(operation)
    })
  }
}
