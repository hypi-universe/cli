
import { Command, flags } from '@oclif/command'
import cli from 'cli-ux'
import { exec } from "child_process";

import WskService from '../hypi/services/wsk-service'
import UserService from '../hypi/services/user-service'
import InstanceService from '../hypi/services/instance-service'
import HypiService from '../hypi/services/hypi-service'
import AppService from '../hypi/services/app-service'

export default class Wsk extends Command {
    static description = 'Invoke the OpenWhisk command to perform serverless functions'

    static flags = {
        help: flags.help({ char: 'h' }),
    }

    static args = []

    // static parse = false // don't try to parse argv?
    static strict = false

    static examples = [
        '$ hypi wsk action list',
        '$ hypi wsk action create hello hello.js',
        '$ hypi wsk action invoke hello --result',
    ]

    async run() {

        cli.action.start('Invoking OpenWhisk')

        //check user has wsk installed , if not check with with user hypi path
        const testWskCommand = `${this.config.configDir}/wsk config -h`

        const wskCommand = `${this.config.configDir}/wsk ${this.argv.join(' ')}`;
        console.log(wskCommand)

        //make sure user is logged in and done init
        // if not logged int
        if (!UserService.isUserConfigExists()) {
            this.error('Please login first')
        }
        const hypiService = new HypiService()
        const appService = new AppService()
        const instanceService = new InstanceService()

        // check app.yaml and instance.yaml exists
        const checkDotHypiExists = await hypiService.checkHypiFolder()
        if (checkDotHypiExists.error) this.error(checkDotHypiExists.error)

        const readAppDocResponse = appService.readAppDoc()
        const readInstanceDoc = instanceService.readInstanceDoc()

        if (readAppDocResponse.error || readInstanceDoc.error) {
            this.error(readAppDocResponse.error ?? readInstanceDoc.error)
        }

        //next step configure command
        if (this.argv.length === 1 && this.argv.toString() === 'configure') {
            const apiHost = "https://fn.hypi.app"
            const instanceDomain = readInstanceDoc.data.domain;

            const token = UserService.getUserConfig().sessionToken;
            const auth = `${instanceDomain}:${token}`
            const wskCommand2 = `${this.config.configDir}/wsk property set --apihost "${apiHost}" --auth "${auth}"`;
            console.log(wskCommand2)
            this.exit()
        }

        // make test command with wsk to make sure it is installed
        // if installed run the command
        // if not, tell the user and ask to install the openwhisk
        //

        const platform = this.config.platform
        const arch = this.config.arch

        exec(wskCommand, async (error, stdout, stderr) => {
            if (error) {
                if (error.message.includes(' wsk: not found')) {
                    console.log("error", 'we should install open wsk');
                    //ask the user if he wants to install openwhisk for him
                    const installOpenWhisk = await cli.confirm('Do you want to install Openwhisk? (yes/no)')
                    if (!installOpenWhisk) {
                        return
                    }
                    //install openwhisk
                    const wskService = new WskService(platform, arch, this.config.configDir)
                    wskService.getWskBinaries();
                }
                return;
            }
            if (stderr) {
                console.log("data", stdout);
                return;
            }
            //execute the command and get the result
            console.log("data", stdout);
        });

        cli.action.stop()
    }
}
