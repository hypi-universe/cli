import { gql } from '@apollo/client/core';
import client from '../client';

const FIND_APP = gql`
  query findApp($arcql: String!) {
  find(type: App, arcql: $arcql) {
    edges {
      node {
        ... on App {
          ...app
          }
        }
    }
  }
}
fragment app on App {
  name
  label
  hypi {
    id
  }
  releases {
    ...releases
  }
 }
fragment releases on AppRelease {
  hypi {
    id
  }
  label
  name
  notes
  status
  isDefault
  }
`;
const findApp = async (vars: Object) => {
  return client
    .query({
      query: FIND_APP,
      variables: vars
    })
};

export default findApp;
