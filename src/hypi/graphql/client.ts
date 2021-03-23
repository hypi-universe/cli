import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client/core';
import * as fs from 'fs-extra'
import { UserConfigType } from '../domain/types';
import fetch from 'cross-fetch';
import  * as Conf  from 'conf';

const config = new Conf();
const configFilePath = config.get("cli-config-file") as string;
const url = config.get('app-url') as string;

const userConfig: UserConfigType = fs.readJSONSync(configFilePath); 

const httpLink = new HttpLink({ uri: url + '/graphql' , fetch: fetch});
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: userConfig.sessionToken || null,
      'hypi-domain': userConfig.domain
    }
  });

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});
export default client;