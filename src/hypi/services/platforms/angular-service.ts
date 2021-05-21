/* eslint-disable no-console */

import {codegen} from '@graphql-codegen/core'
import {GraphQLSchema} from 'graphql'
import {loadSchema} from '@graphql-tools/load'
import {loadDocuments} from '@graphql-tools/load'
import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader'
import * as fs from 'fs-extra'
import * as typescriptPlugin from '@graphql-codegen/typescript'
import * as typescriptOperationsPlugin from '@graphql-codegen/typescript-operations'
import * as typescriptAngularApolloPlugin from '@graphql-codegen/typescript-apollo-angular'

import path from 'path'

export default class AngularService implements Platform {
  async validate() {
    return {error: false}
  }

  async generate() {
    // write the graphql code generator here
    await this.generateWithAPI()
  }

  private async generateWithAPI() {
    const schemaFile = process.cwd() + '/.hypi/generated-schema.graphql'

    const schema: GraphQLSchema = await loadSchema(schemaFile,
      {
        loaders: [
          new GraphQLFileLoader(),
        ],
      })
    const documents = await loadDocuments(process.cwd() + '/src/**/*.graphql', {
      loaders: [
        new GraphQLFileLoader(),
      ],
    })

    const outputFile = '/src/generated/graphql.ts'
    const config: any = {
      filename: outputFile,
      schema: schema,
      documents: documents,
      overwrite: true,
      plugins: [
        {
          typescript: {},
        },
        {
          typescriptOperations: {},
        },
        {
          typescriptAngularApollo: {},
        },
      ],
      pluginMap: {
        typescript: typescriptPlugin,
        typescriptOperations: typescriptOperationsPlugin,
        typescriptAngularApollo: typescriptAngularApolloPlugin,
      },
      config: {
        querySuffix: 'QueryService',
        mutationSuffix: 'MutationService',
        subscriptionSuffix: 'SubscriptionService',
      },
    }
    const output = await codegen(config)

    const outputDir = process.cwd() + '/src/generated'
    if (!fs.existsSync(outputDir))
      fs.mkdirSync(outputDir)

    fs.writeFile(path.join(process.cwd(), outputFile), output, err => {
      if (err) throw err

      console.log('The file was succesfully generated!')
    })
  }
}
