import { gql } from '@apollo/client/core';
import {hypi_domain_client as client} from '../client';

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
