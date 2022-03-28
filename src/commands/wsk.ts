
import {flags} from '@oclif/command'
import cli from 'cli-ux'
import {exec} from 'child_process'
import AuthCommand from '../auth-base'

import WskService from '../hypi/services/wsk-service'
import UserService from '../hypi/services/user-service'
import HypiService from '../hypi/services/hypi-service'
import {messages} from '../hypi/helpers/messages'

export default class Wsk extends AuthCommand {
    static description = 'Invoke the OpenWhisk command to perform serverless functions'

    static flags = {
      help: flags.help({char: 'h'}),
    }

    static args = []

    // static parse = false // don't try to parse argv?
    static strict = false

    static examples = [
      '$ hypi wsk configure',
      '$ hypi wsk action list',
      '$ hypi wsk action create hello hello.js',
      '$ hypi wsk action invoke hello --result',
    ]

    hypiService = new HypiService()

    async run() {
      this.handleCommand()
    }

    private async handleCommand() {
      const wskCommand = this.prepareCommand()
      this.executeCommand(wskCommand)
    }

    private prepareCommand() {
      if (this.argv.length === 1 && this.argv.toString() === 'configure') {
        const apiHost = UserService.getUserConfig().fn_domain 
        const instanceDomain = UserService.getUserConfig().domain

        const token = UserService.getUserConfig().sessionToken
        const auth = `${instanceDomain}:${token}`
        return `${this.config.configDir}/wsk property set --apihost '${apiHost}' --auth '${auth}'`
      }
      return `${this.config.configDir}/wsk ${this.argv.join(' ')}`
    }

    private executeCommand(wskCommand: string) {
      exec(wskCommand, async (error, stdout, stderr) => {
        if (error) {
          console.log(error)
          // if (error.message.includes('wsk: not found')) {
          if (error.code === 127) {
            this.log(messages.wskCommand.wskCommandNotFound)
            const installOpenWhisk = await cli.confirm(messages.wskCommand.confirmInstallWsk)
            if (!installOpenWhisk)
              return
            this.installOpenWhisk(wskCommand)
          } else{
            this.log(`Error:  ${error.message}`)
          }
          return
        }
        if (stderr) {
          this.log(`stderr:  ${stderr}`)
          return
        }
        this.log(stdout)
      })
    }

    private installOpenWhisk(wskCommand: string) {
      // check app.yaml and instance.yaml exists
      const platform = this.config.platform
      const arch = this.config.arch

      const wskService = new WskService(platform, arch, this.config.configDir)

      wskService.installOpenWhisk(async () => {
        await cli.wait()
        this.executeCommand(wskCommand)
      })
    }
}
