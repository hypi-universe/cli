
import MultipleApolloClient from './multiple-client'
import Utils from '../helpers/utils'
import * as path from 'path'
import { exit } from 'process';

const hypiDir = Utils.getHypiDir();
const instanceRead = Utils.readYamlFile(path.join(hypiDir, 'instance.yaml'));

export const hypi_domain_client: any = MultipleApolloClient.getInstance().getApolloClient();
export const user_domain_client : any = MultipleApolloClient.getInstance().getApolloClient({ "domain": instanceRead.data ? instanceRead.data.domain : null});
