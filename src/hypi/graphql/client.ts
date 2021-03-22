import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client/core';
import * as YAML from 'yaml';
import * as fs from 'fs-extra'
import * as path from 'path'
import { HypiConfigType, UserConfigType } from '../domain/types';
import fetch from 'cross-fetch';

const appFilePath = path.join('./src/hypi/', 'config.yaml')
const hypiConfigYaml = fs.readFileSync(appFilePath, 'utf-8');
const hypiConfig: HypiConfigType = YAML.parse(hypiConfigYaml);

const userConfigFile = path.join(hypiConfig.configDir, 'config.json');
const userConfig: UserConfigType = fs.readJSONSync(userConfigFile); //as

const httpLink = new HttpLink({ uri: hypiConfig.url + '/graphql' , fetch: fetch});
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