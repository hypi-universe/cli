import { gql } from '@apollo/client/core';
import HypiClient from '../hypi-client';

const client = HypiClient.getClientWithUserDomain();

const FIND_INSTANCE = gql`
 query findAppInstance($arcql: String!) {
  find(type: AppInstance, arcql: $arcql) {
    edges {
      node {
        ... on AppInstance {
          domain
          pinned
          settings
          enableAnonymousRequests
          enableAnonymousRegistrations
          requireEmailVerification
          release {
            label
            name
            notes
            status
            isDefault
            schema{
                types
            }
            hypi {
              id
              __typename
            }
            __typename
          }
          plan {
            nextDue
            billingDate
            frequency
            account {
              owner {
                names {
                  firstName
                  lastName
                  hypi {
                    id
                    __typename
                  }
                  __typename
                }
                __typename
              }
              __typename
            }
            hypi {
              id
              __typename
            }
            __typename
          }
          hypi {
            id
            created
            updated
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
}
`;
const findAppInstanceQuery = (vars: Object) => {
  return client
    .query({
      query: FIND_INSTANCE,
      variables: vars,
      fetchPolicy: "no-cache"
    })
};

export default findAppInstanceQuery;
