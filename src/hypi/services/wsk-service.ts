/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import request from 'superagent'
import {exec} from 'child_process'

import decompress from 'decompress'
const decompressTargz = require('decompress-targz')

export default class WskService {
    readonly WSK_DOWNLOAD_URL: string = 'https://github.com/apache/openwhisk-cli/releases/download/1.2.0/OpenWhisk_CLI-1.2.0-'

    readonly OPEN_WHISK_FILE_NAME: string = 'openwhisk';

    private platform: string;

    private arch: string;

    private url = '';

    private hypiConfigDir = ''

    private wskArchiveName = ''

    constructor(platform: string, arch: string, hypiConfigDir: string) {
      this.platform = platform
      this.arch = arch
      this.setUrl()
      this.hypiConfigDir = hypiConfigDir
      this.wskArchiveName = `openwhisk${path.extname(this.url)}`
    }

    public setUrl() {
      switch (this.platform) {
      case 'linux':
        this.url = this.WSK_DOWNLOAD_URL + (this.arch.includes('64') ? 'linux-amd64.tgz' : 'linux-386.tgz')
        break
      case 'darwin':
        this.url = this.WSK_DOWNLOAD_URL + 'mac-amd64.zip'
        break
      case 'win32':
        this.url = this.WSK_DOWNLOAD_URL + (this.arch.includes('64') ? 'windows-amd64.zip' : 'windows-386.zip')
        break
      }
    }

    public installOpenWhisk(callback: () => void) {
      request
      .get(this.url)
      .on('error', error => {
        console.log(error)
      })
      .pipe(fs.createWriteStream(this.wskArchiveName))
      .on('finish', async () => {
        console.log('hi')
        const files: decompress.File[] = await this.decompress()
        if (files.length === 1) {
          console.log('OpenWhisk installed')
          this.clean()
          callback()
          return
        }
        console.log('Failed, please try again')
      })
    }

    decompress(): Promise<decompress.File[]> {
      // const src = path.join(__dirname, '../../..', this.wskArchiveName)
      const src = path.join(process.cwd(), this.wskArchiveName)

      const dist = this.hypiConfigDir
      const extension = path.extname(src)

      return decompress(src, dist, {
        plugins: extension === '.tgz' ? [decompressTargz()] : [],
        filter: file => {
          return path.basename(file.path) === 'wsk' || path.extname(file.path) === '.exe'
        },
      })
    }

    private clean() {
      // remove downloaded archive for cleaning
      exec(`rm ${path.join(__dirname, '../../..', this.wskArchiveName)}`)
    }

  // private moveToHypiFolder() {
  //     const src = path.join(__dirname, "../../..", 'dist', 'wsk');
  //     const dist = '/usr/local/bin';

  //     //if mac or linux
  //     exec("sudo mv " + src + " " + dist, (error, stdout, stderr) => {
  //         if (error) {
  //             console.log(`error: ${error.message}`);
  //             return { error };
  //         }
  //         if (stderr) {
  //             console.log(`stderr: ${stderr}`);
  //             return { error: stderr };
  //         }
  //         console.log(`stdout: ${stdout}`);
  //         return { error: false, message: stdout }
  //     });
  // }

  // getFileExtension(url: string): string {
  //     return path.extname(url)
  // }
}
