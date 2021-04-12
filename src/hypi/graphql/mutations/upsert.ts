import { gql } from '@apollo/client/core';
import HypiClient from '../hypi-client';

const UPSERT = gql`
mutation upsertMutation($values:HypiUpsertInputUnion!) {
  upsert(values:$values)
    {
        id
    }
}
`;
const upsertMutation = (vars: Object) => {
  const client = HypiClient.getClientWithUserDomain();

  return client
    .mutate({
      mutation: UPSERT,
      variables: vars,
      fetchPolicy: "no-cache"
    })
};

export default upsertMutation;
