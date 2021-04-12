import { gql } from '@apollo/client/core';
import HypiClient from '../hypi-client';

const client = HypiClient.getClientWithUserDomain();

const UPSERT = gql`
mutation upsertMutation($values:HypiUpsertInputUnion!) {
  upsert(values:$values)
    {
        id
    }
}
`;
const upsertMutation = (vars: Object) => {
  return client
    .mutate({
      mutation: UPSERT,
      variables: vars,
      fetchPolicy: "no-cache"
    })
};

export default upsertMutation;
