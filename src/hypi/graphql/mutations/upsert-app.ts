import {gql} from '@apollo/client/core'
import HypiClient from '../hypi-client'

const UPSERT = gql`
mutation upsertMutation($values:HypiUpsertInputUnion!) {
  upsert(values:$values)
    {
        id
    }
}
`
const upsertMutation = (vars: Record<string, any>) => {
  const client = HypiClient.getClientWithInstanceDomain()

  return client
  .mutate({
    mutation: UPSERT,
    variables: vars,
    fetchPolicy: 'no-cache',
  })
}

export default upsertMutation
