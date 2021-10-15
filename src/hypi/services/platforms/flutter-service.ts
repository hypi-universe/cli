/* eslint-disable no-console */
import * as fs from 'fs-extra'
import * as path from 'path'
import * as YAML from 'yaml'
import {exec} from 'child_process'

import flutterDependencies from '../../flutter-dependencies'
import Utils from '../../helpers/utils'
import {messages} from '../../helpers/messages'

export default class FlutterService implements Platform {
  async validate() {
    let message: any

    const checkDependcies = await this.validateFlutterDependcies()

    if (checkDependcies.error || checkDependcies.missed)
      return {error: true, message: message}

    /* check if build.yaml exists or not
    if not exists, create the file and add the content to it -- static content I will be saving
    **/
    this.validateBuildYamlFile()

    return {error: false}
  }

  public generate() {
    const command = 'flutter pub run build_runner build --delete-conflicting-outputs'
    console.log(`Running ${command}`)

    return new Promise<string>((resolve, reject) => {
      exec(command, async (error, stdout, stderr) => {
        if (error || stderr) {
          reject(error)
        }
        resolve(stdout)
      })
    })
  }

  private async validateFlutterDependcies() {
    const filePath = path.join(process.cwd(), 'pubspec.yaml')
    if (!fs.existsSync(filePath)) {
      return {missed: false, error: true, message: 'Failed to find ~/pubspec.yaml'}
    }
    const file = await fs.readFile(filePath, 'utf8')
    const doc = YAML.parseDocument(file)
    const missingDependcies:
      { dependencies: string[]; dev_dependencies: string[] } =
      {dependencies: [], dev_dependencies: []}

    Object.entries(flutterDependencies.dependencies).forEach(([key, value]) => {
      if (!doc.hasIn(['dependencies', key])) {
        missingDependcies.dependencies.push(key + ': ' + value)
      }
    })
    Object.entries(flutterDependencies.dev_dependencies).forEach(([key, value]) => {
      if (!doc.hasIn(['dev_dependencies', key])) {
        missingDependcies.dev_dependencies.push(key + ': ' + value)
      }
    })

    if (missingDependcies.dependencies.length > 0 ||
      missingDependcies.dev_dependencies.length > 0) {
      return {missed: true, error: false, message: this.formatMissedDependciesMessage(missingDependcies)}
    }
    return {missed: false, error: false, message: ''}
  }

  private formatMissedDependciesMessage(missingDependcies: any) {
    let message = '[ERROR] please make sure that the following dependecies does exist in pubspec.yaml \n'
    if (missingDependcies.dependencies.length > 0) {
      message = message.concat('dependencies \n')
    }
    Object.entries(missingDependcies.dependencies).forEach(([, value]) => {
      message = message.concat('\t' + value + '\n')
    })

    if (missingDependcies.dev_dependencies.length > 0) {
      message = message.concat('dev_dependencies \n')
    }
    Object.entries(missingDependcies.dev_dependencies).forEach(([, value]) => {
      message = message.concat('\t' + value + '\n')
    })

    return message
  }

  private async writeToFlutterPackageManager() {
    const filePath = path.join(process.cwd(), 'pubspec.yaml')
    if (!fs.existsSync(filePath)) {
      return {error: 'Failed to find ~/pubspec.yaml'}
    }
    const file = await fs.readFile(filePath, 'utf8')
    const doc = YAML.parseDocument(file)

    Object.entries(flutterDependencies.dependencies).forEach(([key, value]) => {
      Utils.addNodeToYamlDoc(doc, 'dependencies', key, String(value))
    })
    Object.entries(flutterDependencies.dev_dependencies).forEach(([key, value]) => {
      Utils.addNodeToYamlDoc(doc, 'dev_dependencies', key, String(value))
    })
    try {
      await fs.writeFile(filePath, String(doc))
      return {error: false}
    } catch (error) {
      if (!fs.existsSync(filePath)) {
        return {error: error.message}
      }
    }
    return {error: null}
  }

  private async validateBuildYamlFile() {
    const filePath = path.join(process.cwd(), 'build.yaml')
    if (fs.existsSync(filePath)) return {error: false}

    // if build.yaml file not exists, create the build.yaml file and upsert the file content
    const src = `targets:
    $default:
      sources:
        - lib/**
        - graphql/**
        - .hypi/generated-schema.graphql
        - $package$
      builders:
        artemis:
          options:
            schema_mapping:
              - schema: .hypi/generated-schema.graphql
                output: lib/models/graphql/graphql.dart
                queries_glob: graphql/*.graphql
                naming_scheme: pathedWithFields
                type_name_field: __typename
                append_type_name: true
            custom_parser_import: 'package:graphbrainz_example/coercers.dart'
            scalar_mapping:
              - graphql_type: DateTime
                dart_type: DateTime
              - graphql_type: Json
                dart_type: Set
              - graphql_type: Long
                dart_type: int
              - graphql_type: Any
                dart_type: String
  `
    const doc = YAML.parseDocument(src)

    try {
      await fs.writeFile(filePath, String(doc))
      return {error: false}
    } catch (error) {
      return {error: 'Failed to write to ' + filePath}
    }
  }
}
