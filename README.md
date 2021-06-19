hypi
====

hypi command line interface

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Build instructions](#build-instructions)
<!-- tocstop -->
## Install
```$ npm install -g @hypi/cli```
### Getting started [ReactJS Project]

https://github.com/hypi-universe/hypi-cli-react-example

### Getting started [Angular Project]

https://github.com/hypi-universe/hypi-cli-angular-example

### Getting started [Flutter Project]

https://github.com/hypi-universe/hypi-cli-flutter-example

# Usage
<!-- usage -->
```sh-session
$ npm install -g @hypi/cli
$ hypi COMMAND
running command...
$ hypi (-v|--version|version)
@hypi/cli/0.2.0 linux-x64 node-v14.17.1
$ hypi --help [COMMAND]
USAGE
  $ hypi COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hypi commands`](#hypi-commands)
* [`hypi config [API_DOMAIN]`](#hypi-config-api_domain)
* [`hypi generate [PLATFORM]`](#hypi-generate-platform)
* [`hypi help [COMMAND]`](#hypi-help-command)
* [`hypi init`](#hypi-init)
* [`hypi login`](#hypi-login)
* [`hypi sync`](#hypi-sync)
* [`hypi update [CHANNEL]`](#hypi-update-channel)

## `hypi commands`

list all the commands

```
USAGE
  $ hypi commands

OPTIONS
  -h, --help              show CLI help
  -j, --json              display unfiltered api data in json format
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --hidden                show hidden commands
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v1.3.0/src/commands/commands.ts)_

## `hypi config [API_DOMAIN]`

set user configuration

```
USAGE
  $ hypi config [API_DOMAIN]

OPTIONS
  -a, --api_domain=api_domain
  -h, --help                   show CLI help

EXAMPLES
  $ hypi config api.mydomain.com
  $ hypi config -a=api.mydomain.com
  $ hypi config --api_domain=api.mydomain.com
```

_See code: [src/commands/config.ts](https://github.com/hypi-universe/cli/blob/v0.2.0/src/commands/config.ts)_

## `hypi generate [PLATFORM]`

generate the schema typescript file

```
USAGE
  $ hypi generate [PLATFORM]

OPTIONS
  -h, --help                              show CLI help
  -p, --platform=flutter|reactjs|angular

EXAMPLES
  $ hypi generate angular
  $ hypi generate -p=angular
  $ hypi generate --platform=angular
```

_See code: [src/commands/generate.ts](https://github.com/hypi-universe/cli/blob/v0.2.0/src/commands/generate.ts)_

## `hypi help [COMMAND]`

display help for hypi

```
USAGE
  $ hypi help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `hypi init`

Init a hypi app

```
USAGE
  $ hypi init

OPTIONS
  -h, --help           show CLI help
  -i, --have_instance

EXAMPLES
  $ hypi init -i
  $ hypi init --have_instance
  $ hypi init
```

_See code: [src/commands/init.ts](https://github.com/hypi-universe/cli/blob/v0.2.0/src/commands/init.ts)_

## `hypi login`

Login to hypi with email and password or domain and token

```
USAGE
  $ hypi login

OPTIONS
  -d, --domain
  -h, --help    show CLI help

EXAMPLES
  $ hypi login
  $ hypi login -d
  $ hypi login --domain
```

_See code: [src/commands/login.ts](https://github.com/hypi-universe/cli/blob/v0.2.0/src/commands/login.ts)_

## `hypi sync`

sync user local schema with hypi

```
USAGE
  $ hypi sync

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ hypi sync
```

_See code: [src/commands/sync.ts](https://github.com/hypi-universe/cli/blob/v0.2.0/src/commands/sync.ts)_

## `hypi update [CHANNEL]`

update the hypi CLI

```
USAGE
  $ hypi update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.10/src/commands/update.ts)_
<!-- commandsstop -->

# Build instructions

For Buiilding you will need to install olcif-dev https://github.com/oclif/dev-cli

```npm install -g @oclif/dev-cli```

## npm
* sudo npm adduser --scope=hypi --always-auth
* npm version
* sudo npm publish --access public

## Standalone tarballs

* sudo oclif-dev pack
* user does not have to already have node installed to use the CLI
* To publish, you can copy the files from ```./dist``` or use ```oclif-dev publish``` to copy the files to S3

## Windows installer

Make sure you have 7z && nsis installed 
https://www.journaldev.com/29456/install-7zip-ubuntu
https://www.howtoinstall.me/ubuntu/18-04/nsis/

* sudo oclif-dev pack:win
* It will build into ```./dist/win```
* Publish to S3 with ```oclif-dev publish:win```

## macOS installer

* oclif-dev pack:macos
* It will build into ```./dist/macos```
* Publish to S3 with ```oclif-dev publish:macos```
* You need to set the macOS identifier at oclif.macos.identifier in package.json
* To sign the installer, set oclif.macos.sign in package.json to a certificate (For the Heroku CLI this is "Developer ID Installer: Heroku INC"). And optionally set the keychain with OSX_KEYCHAIN.
https://developer.apple.com/developer-id/


## Ubuntu/Debian packages

* Set the MYCLI_DEB_KEY to a gpg key id to create the gpg files
```
export MYCLI_DEB_KEY=MY_DEB_KEY
```
* oclif-dev pack:deb
* Published to S3 with oclif-dev publish:deb.
Once it's published to S3, users can install with the following:

```
$ wget -qO- https://mys3bucket.s3.amazonaws.com/apt/release.key | apt-key add - # you will need to upload this file manually
$ sudo echo "deb https://mys3bucket.s3.amazonaws.com/apt ./" > /etc/apt/sources.list.d/mycli.list
$ sudo apt update
$ sudo apt install -y mycli
```

## Autoupdater

* Tarballs as well as the installers can be made autoupdatable by adding the @oclif/plugin-update plugin.
- CLI will autoupdate in the background or when mycli update is run.
- If you don't want to use S3, you can still run oclif-dev pack and it will build tarballs. To get the updater to work, set oclif.update.s3.host in package.json to a host that has the files built in ./dist from oclif-dev pack. This host does not need to be an S3 host. To customize the URL paths, see the S3 templates in @oclif/config.
Snapcraft
