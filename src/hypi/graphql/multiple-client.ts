import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client/core';
import { UserConfigType } from '../domain/types';
import fetch from 'cross-fetch';
import Utils from '../helpers/utils';
import UserService from '../services/user-service';

export default class MultipleApolloClient {
  private static instance: MultipleApolloClient;

  private url: string = "";
  private userConfig!: UserConfigType;

  public static getInstance(): MultipleApolloClient {
    if (!MultipleApolloClient.instance) {
      MultipleApolloClient.instance = new MultipleApolloClient();
    }
    return MultipleApolloClient.instance;
  }

  public getApolloClient(options?: any) {
    if (!UserService.isUserConfigExists()) {
      return null;
    }
    this.userConfig = UserService.getUserConfig();
    this.url = Utils.getAppUrl();

    const httpLink = new HttpLink({ uri: this.url + '/graphql', fetch: fetch });
    const authMiddleware = new ApolloLink((operation, forward) => {
      // add the authorization to the headers
      operation.setContext({
        headers: {
          authorization: this.userConfig.sessionToken || null,
          'hypi-domain': options && options.hasOwnProperty('domain') ? options.domain : this.userConfig.domain
        }
      });
      return forward(operation);
    });

    return new ApolloClient({
      cache: new InMemoryCache(),
      link: concat(authMiddleware, httpLink),
    });
  }

}