import { gql } from '@apollo/client/core';
import client from '../client';

const UPSERT = gql`
mutation upsertMutation($values:HypiUpsertInputUnion!) {
  upsert(values:$values)
    {
        id
    }
}
`;
const upsertMutation = async (vars: Object) => {
  return client
    .mutate({
      mutation: UPSERT,
      variables: vars
    })
};

export default upsertMutation;
