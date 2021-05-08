/* eslint-disable no-console */
import Utils from '../../helpers/utils'

const shell = require('shelljs')

export default class FlutterService implements Platform {
  async validate() {
    let message: any

    const checkDependciesExists = await Utils.doesFlutterDependciesExists()

    if (checkDependciesExists.error || checkDependciesExists.missed)
      return {error: true, message: message}

    return {error: false}
  }

  async generate() {
    console.log('Running flutter pub run build_runner build --delete-conflicting-outputs')
    shell.exec('flutter pub run build_runner build --delete-conflicting-outputs', {silent: true}, function (code: any, stdout: any, stderr: any) {
      // eslint-disable-next-line no-console
      stdout ? console.log('Program output:', stdout) : null
      // eslint-disable-next-line no-console
      stderr ? console.log('Program stderr:', stderr) : null
      // cli.action.stop() // shows 'starting a process... done'
    })
  }
}
