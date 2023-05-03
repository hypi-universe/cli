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
      default: 'push',           // default value if no arg input
      options: ['push', 'list', 'invoke', 'deploy'],        // only allow input to be from a discrete set
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
    '$ hypi fn push hello hello.js',
    '$ hypi fn push hello fn-with-dependencies.zip',
    '$ hypi fn invoke hello --result',
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
    case 'deploy':
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
      this.handleResponse(args.action, res)
    }
    //console.log('Running my command with args', this.argv, list.error.response.status, list.error.response.data)
    //this.log(messages.loginCommand.loggedIn)
  }

  private handleResponse(action: string, res: any) {
    switch (action) {
    case 'list':
      this.listOutput(res)
      break
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

  private listOutput(res: any) {
    this.log(JSON.stringify(res))
  }

  private invokeOutput(res: any) {
    this.log(res)
  }
}
