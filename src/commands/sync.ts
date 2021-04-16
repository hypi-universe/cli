import { Command, flags } from '@oclif/command'
import AppService from '../hypi/services/app-service'
import InstanceService from '../hypi/services/instance-service'
import HypiService from '../hypi/services/hypi-service'
import Utils from '../hypi/helpers/utils'
import UserService from '../hypi/services/user-service'
import SyncService from '../hypi/services/sync-service'

var shell = require('shelljs');

export default class Sync extends Command {
  static description = 'sync user local schema with hypi'

  static examples = [
    `$ hypi sync`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  async run() {
    const syncService = new SyncService();
    const appService = new AppService();
    const instanceService = new InstanceService();
    const hypiService = new HypiService();

    const Listr = require('listr');

    const tasks = new Listr([
      {
        title: 'Check user logged in',
        task: (ctx: any) => {
          if (!UserService.isUserConfigExists()) {
            this.error('Please login first');
          }
        },
      },
      {
        title: 'Check flutetr dependcies exists',
        task: () => Promise.resolve(Utils.doesFlutterDependciesExists()).then(result => {
          if (result.error) {
            this.error(result.message);
          }
          if (result.missed) {
            this.error(result.message);
          }
        })
      },
      {
        title: 'Check .hypi folder',
        task: () => Promise.resolve(syncService.checkHypiFolder()).then(result => {
          if (result.error) {
            this.error(result.error);
          }
        })
      },
      {
        title: 'Load App.yaml and instance.yaml files',
        task: (ctx: any) => {
          const readAppDocResponse = appService.readAppDoc();
          const readInstanceDoc = instanceService.readInstanceDoc();

          if (readAppDocResponse.error || readInstanceDoc.error) {
            this.error(readAppDocResponse.error ?? readInstanceDoc.error);
          }
          ctx.appDoc = readAppDocResponse.data;
          ctx.instanceDoc = readInstanceDoc.data;
        }
      },
      {
        title: 'Create App',
        task: (ctx: any, task: any) => Promise.resolve(appService.createUserApp(Utils.deepCopy(ctx.appDoc)))
          .then(result => {
            let appDoc = ctx.appDoc;
            let instanceDoc = ctx.instanceDoc;

            if (result.error) {
              this.error(result.error);
            }
            const app = result.app;
            this.log('App created with id : ' + app.hypi.id);

            appDoc = appService.updateAppDocWithIds(appDoc, app);
            const release = app.releases
              .find((release: any) => release.name === appDoc.releases[0].name);
            instanceDoc.release.hypi = { "id": release.hypi.id };

            ctx.appDoc = appDoc;
            ctx.instanceDoc = instanceDoc;

            task.title = `${task.title}, Created with id : ${app.hypi.id}`;
          })
      },
      {
        title: 'Create Instance',
        task: (ctx: any, task: any) => Promise.resolve(instanceService.createAppInstance(Utils.deepCopy(ctx.instanceDoc)))
          .then(result => {
            let instanceDoc = ctx.instanceDoc;

            if (result.error) {
              this.error(result.error);
            }
            const instance = result.instance;
            this.log('Instance created with id : ' + instance.hypi.id);

            instanceDoc = instanceService.updateInstanceDocWithIds(instanceDoc, instance);
            ctx.instanceDoc = instanceDoc;
            task.title = `${task.title}, Created with id : ${instance.hypi.id} `
          })
      },
      {
        title: 'Update app.yaml',
        task: (ctx: any) => Promise.resolve(appService.updateAppYamlFile(ctx.appDoc))
          .then(result => {
            this.log('updateAppYamlFile done')
          })
      },
      {
        title: 'Update instance.yaml',
        task: (ctx: any) => Promise.resolve(instanceService.updateInstanceYamlFile(ctx.instanceDoc))
          .then(result => {
            this.log('updateInstanceYamlFile done')
          })
      },
      {
        title: 'do intorpsection',
        task: (ctx: any) => Promise.resolve(hypiService.doIntrospection()).then(result => {
          if (result.error) {
            this.error(result.error);
          }
          this.log('Introspection done')
        })
      },
      {
        title: 'Generate schema dart files',
        task: () => {
          console.log('Running flutter pub run build_runner build --delete-conflicting-outputs')
          // shell.exec('flutter pub run build_runner build --delete-conflicting-outputs', { silent: true }, function (code: any, stdout: any, stderr: any) {
          //   stdout ? console.log('Program output:', stdout) : null;
          //   stderr ? console.log('Program stderr:', stderr) : null;
          //   cli.action.stop() // shows 'starting a process... done'
          // });
        }
      },
    ]);
    tasks.run()
    // .catch((err: any) => {
    //   this.error(err.message);
    // });

  }
}
