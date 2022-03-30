/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import request from 'superagent'
import {exec} from 'child_process'

import decompress from 'decompress'
import { exit } from 'process'
const decompressTargz = require('decompress-targz')
const decompressUnzip = require('decompress-unzip');

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
        console.log('---- Error download openwhisk binaries-----')
        console.log(error)
      })
      .pipe(fs.createWriteStream(this.wskArchiveName))
      .on('finish', async () => {
        console.log('Openwhisk binaries downloaded')
        const files: decompress.File[] = await this.decompress()
        if (files.length === 1) {
          console.log('OpenWhisk installed')
          this.clean()
          callback()
          return
        }
        console.log('Failed to install openwhisk, please try again')
      })
    }

    decompress(): Promise<decompress.File[]> {
      const src = path.join(process.cwd(), this.wskArchiveName)
      const dist = this.hypiConfigDir
      const extension = path.extname(src)

      return decompress(src, dist, {
        plugins: extension === '.tgz' ? [decompressTargz()] : [decompressUnzip()],
        filter: file => {
          return path.basename(file.path) === 'wsk' || path.extname(file.path) === '.exe'
        },
      })
    }

    private clean() {
      exec(`rm ${path.join(process.cwd(), this.wskArchiveName)}`)
    }
}
