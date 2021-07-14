/* eslint-disable prefer-const */
/* eslint-disable no-console */

import {codegen} from '@graphql-codegen/core'
import {GraphQLSchema} from 'graphql'
import {loadSchema} from '@graphql-tools/load'
import {loadDocuments} from '@graphql-tools/load'
import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader'
import * as fs from 'fs-extra'
import * as typescriptPlugin from '@graphql-codegen/typescript'
import * as typescriptOperationsPlugin from '@graphql-codegen/typescript-operations'
import * as typescriptVueApolloPlugin from '@graphql-codegen/typescript-vue-apollo'
import * as typescriptVueApolloSmartOpsPlugin from '@graphql-codegen/typescript-vue-apollo-smart-ops'

import Utils from '../../helpers/utils'

import path from 'path'
export interface VuejsOptions {
  generationType: string;
}

export enum GenerationTypes {
  Composition_API = 'Composition API',
  Smart_Queries = 'Smart Queries',
}

export default class VuejsService implements Platform {
  private options: VuejsOptions;

  constructor(options: VuejsOptions) {
    this.options = options
  }

  static generationTypesArray() {
    return Utils.enumToArray(GenerationTypes)
  }

  async validate() {
    return {error: false}
  }

  async generate() {
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

    let pluginsConfig
    let plugins
    let pluginsMap

    ({pluginsConfig, plugins, pluginsMap} = this.getPlugins())
    const config: any = {
      filename: outputFile,
      schema: schema,
      documents: documents,
      overwrite: true,
      plugins: plugins,
      pluginMap: pluginsMap,
      config: pluginsConfig,
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

  private getPlugins(): any {
    let plugins
    let pluginsMap
    let pluginsConfig

    if (this.options.generationType === GenerationTypes.Smart_Queries) {
      ({plugins, pluginsMap} = this.smartQueriesPlugins())
      pluginsConfig = {
        withSmartOperationFunctions: true,
      }
    } else if (this.options.generationType === GenerationTypes.Composition_API) {
      ({plugins, pluginsMap} = this.compositionApiPlugins())

      pluginsConfig = {
        withCompositionFunctions: true,
      }
    }
    return {pluginsConfig, plugins, pluginsMap}
  }

  private compositionApiPlugins() {
    const plugins = [
      {
        typescript: {},
      },
      {
        typescriptOperations: {},
      },
      {
        typescriptVueApollo: {
          withCompositionFunctions: true,
          vueCompositionApiImportFrom: 'vue',
        },
      },
    ]
    const pluginsMap = {
      typescript: typescriptPlugin,
      typescriptOperations: typescriptOperationsPlugin,
      typescriptVueApollo: typescriptVueApolloPlugin,
    }
    return {plugins, pluginsMap}
  }

  private smartQueriesPlugins() {
    const plugins = [
      {
        typescript: {},
      },
      {
        typescriptOperations: {},
      },
      {
        typescriptVueApolloSmartOps: {},
      },
    ]
    const pluginsMap = {
      typescript: typescriptPlugin,
      typescriptOperations: typescriptOperationsPlugin,
      typescriptVueApolloSmartOps: typescriptVueApolloSmartOpsPlugin,
    }
    return {plugins, pluginsMap}
  }
}
