import {Command, flags} from '@oclif/command'
import {fenrirDeploy, fenrirInvoke, fenrirList, fenrirPush} from '../hypi/api/fn'

export default class Fn extends Command {
  static description = 'Manage Hypi serverless functions'

  static strict = false

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with no value (-d, --domain)
    make_live: flags.boolean({
      char: 'l',
      description: 'Used with fn push or fn deploy to make the given version the one that is live (used to serve requests)',
    }),
    file: flags.string({char: 'f', description: 'Used with invoke to specify the specific file to execute'}),
    method: flags.string({
      char: 'm',
      description: 'Used with invoke to specify the specific function to execute from the file',
    }),
    version: flags.string({
      char: 'v',
      description: 'Used with invoke to specify the specific version of the function to execute',
    }),
  }
  static args = [
    {
      name: 'action',               // name of arg to show in help and reference with args[name]
      required: true,            // make the arg required with `required: true`
      description: 'The specific action to perform on the function', // help description
      hidden: false,               // hide this arg from help
      //parse: input => 'output',   // instead of the user input, return a different value
      default: 'list',           // default value if no arg input
      options: ['push', 'list', 'invoke', 'deploy-version'],        // only allow input to be from a discrete set
    },
    {
      name: 'name',
      required: false,
      description: 'The function\'s name',
      hidden: false,
    },
    {
      required: false,
      name: 'value',
      description: 'For push, this is the file containing the function\'s code e.g. func.js or func.zip for functions with dependencies',
      hidden: false,
    },
  ]

  static examples = [
    '$ hypi fn list',
    '$ hypi fn list -v 4',
    '$ hypi fn list -v all',
    '$ hypi fn push hello hello.js',
    '$ hypi fn push hello hello.js --make_live false',
    '$ hypi fn push hello fn-with-dependencies.zip',
    '$ hypi fn deploy-version hello 4',
    '$ hypi fn invoke hello',
    '$ hypi fn invoke hello --file index.js --arg message:\'Test 1\' --arg b:2 --env c:\'hello there\'',
    '$ hypi fn invoke hello --file index.js --method myFuncName --arg message:\'Test 1\' --arg b:2 --env c:\'hello there\'',
  ]

  async run() {
    const {args, flags} = this.parse(Fn)
    //console.log(args, flags)
    let res: any
    switch (args.action) {
    case 'list':
      res = await fenrirList()
      break
    case 'push':
      res = await fenrirPush(args.name, args.value, flags.make_live)
      break
    case 'deploy-version':
      res = await fenrirDeploy(args.name, args.value)
      break
    case 'invoke':
      let argValues = new Map<String, String>()
      let envValues = new Map<String, String>()
      let nextIsArg = false
      let nextIsEnv = false
      for (let arg of this.argv) {
        //this.log('XXX', arg, nextIsEnv, nextIsArg, envValues, argValues)
        if (nextIsArg) {
          let name: string = arg.split(':')[0]
          argValues.set(name, arg.substring(name.length + 1, arg.length))
          nextIsArg = false
        } else if (nextIsEnv) {
          let name: string = arg.split(':')[0]
          envValues.set(name, arg.substring(name.length + 1, arg.length))
          nextIsEnv = false
        } else if (arg == '--env') {
          nextIsEnv = true
        } else if (arg == '--arg') {
          nextIsArg = true
        }
      }
      res = await fenrirInvoke(args.name, flags.file, flags.method, flags.version, argValues, envValues, undefined)
      break
    }
    if (res.error) {
      if (res.error.response) {
        switch (res.error.response.status) {
        case 400:
          this.log('Invalid command options. Ensure you\'re passing the correct parameters\n', res.error.response.data)
          break
        case 401:
          this.log('Unauthorised')
          break
        case 404:
          this.log(args.action == 'list' ? 'No functions found' : 'Not found')
          break
        default:
          this.log('Unexpected error', res)
        }
      } else {
        this.log('Unexpected error', res)
      }
    } else {
      this.handleResponse(args, flags, res)
    }
    //console.log('Running my command with args', this.argv, list.error.response.status, list.error.response.data)
    //this.log(messages.loginCommand.loggedIn)
  }

  private handleResponse(args: any, flags: any, res: any) {
    switch (args.action) {
    case 'list':
      this.listOutput(res, flags.version)
      break
    case 'deploy-version':
    case 'push':
      this.pushOutput(res)
      break
    case 'invoke':
      this.invokeOutput(res)
      break
    }
  }

  private pushOutput(res: any) {
    this.log('pushed', res)
  }

  private listOutput(res: any, requestedVersion: string) {
    const flattened = []
    for (let fnName of Object.keys(res)) {
      const versions = res[fnName]['versions']
      for (let i = 0; i < versions.length; i++) {
        const version = versions[i]
        const actualVersion = version['version']
        if (requestedVersion == 'all' || requestedVersion == actualVersion || (!requestedVersion && i == versions.length - 1)) {
          let row = new Map<any, any>()
          row.set('Name', fnName)
          //last_modified_millis, est_size, version
          row.set('Version', actualVersion)
          row.set('Live', version['live'] ? 'yes' : 'no'/* '✓' : '˟' */)
          //row.set('Estimated size', version['est_size'])
          row.set('Last modified', new Date(version['last_modified_millis']).toISOString())
          //console.log(row)
          flattened.push(Object.fromEntries(row.entries()))
        }
      }
    }
    console.table(flattened)
  }

  private invokeOutput(res: any) {
    this.log(res)
  }
}
