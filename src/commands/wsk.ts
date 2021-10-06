
import { Command, flags } from '@oclif/command'
import cli from 'cli-ux'
import { exec } from 'child_process';

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
        '$ hypi wsk configure',
        '$ hypi wsk action list',
        '$ hypi wsk action create hello hello.js',
        '$ hypi wsk action invoke hello --result',
    ]

    async run() {

        // cli.action.start('Invoking OpenWhisk')

        //make sure user is logged in and done init
        if (!UserService.isUserConfigExists()) {
            this.error('Please login first')
        }

        this.executeCommand();

        // cli.action.stop()
    }

    private async executeCommand() {
        // check app.yaml and instance.yaml exists
        const platform = this.config.platform
        const arch = this.config.arch

        const wskService = new WskService(platform, arch, this.config.configDir)
        const hypiService = new HypiService()
        const appService = new AppService()
        const instanceService = new InstanceService()

        const checkDotHypiExists = await hypiService.checkHypiFolder();
        if (checkDotHypiExists.error)
            this.error(checkDotHypiExists.error);

        const readAppDocResponse = appService.readAppDoc();
        const readInstanceDoc = instanceService.readInstanceDoc();

        if (readAppDocResponse.error || readInstanceDoc.error) {
            this.error(readAppDocResponse.error ?? readInstanceDoc.error);
        }

        let wskCommand = "";
        if (this.argv.length === 1 && this.argv.toString() === 'configure') {
            const apiHost = "https://fn.hypi.app";
            const instanceDomain = readInstanceDoc.data.domain;

            const token = UserService.getUserConfig().sessionToken;
            const auth = `${instanceDomain}:${token}`;
            wskCommand = `${this.config.configDir}/wsk property set --apihost "${apiHost}" --auth "${auth}"`;
        } else {
            wskCommand = `${this.config.configDir}/wsk ${this.argv.join(' ')}`;
        }
        // console.log(wskCommand);

        exec(wskCommand, async (error, stdout, stderr) => {
            if (error) {
                if (error.message.includes('wsk: not found')) {
                    this.log('OpenWhisk is not installed');
                    const installOpenWhisk = await cli.confirm('Do you want to install Openwhisk? (yes/no)');
                    if (!installOpenWhisk)
                        return;
                    //install openwhisk
                    wskService.installOpenWhisk();
                } else {
                    this.log(error.message)
                }
                return;
            }
            if (stderr) {
                console.log('error')
                this.log("data", stdout);
                return;
            }
            console.log('success')

            console.log("data", stdout);
        });
    }
}
