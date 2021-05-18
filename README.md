hypi
====

hypi command line interface

<!-- toc -->
* [Install](#install)
* [Getting started [Flutter Project]](#getting-started-flutter-project)
* [Usage](#usage)
* [Commands](#commands)
* [Build instructions](#build-instructions)
<!-- tocstop -->
## Install
```$ npm install -g @hypi/cli```
## Getting started [ReactJS Project]

https://github.com/hypi-universe/codegen-react-example
  
## Getting started [Flutter Project]

* Inside yoir flutter project, run ```hypi login``` to login with either email and password or token and domain
afetr login , the user config which hold user token and domain is in ~/.config/hypi/config.json
* After login, you can do ```hypi init``` to initialize your app and instance or refernece an existing domain
.hypi folder will be created with app.yaml, instance.yaml and schema.graphql
* Write your schema inside schema.graphql
* Make sure that following dependecies exists inside your pubspec.yaml in yoru flutter project

```
dependencies:
  artemis: ">=6.0.0 <7.0.0"
  json_annotation: ^ 3.1.0
  equatable: ^ 1.2.5
  meta: ">=1.0.0 <2.0.0"
  gql: ">=0.12.3 <1.0.0"

dev_dependencies:
  artemis: ">=6.0.0 <7.0.0"
  build_runner: ^ 1.10.4
  json_serializable: ^ 3.5.0
```
* Run ```flutter pub get``` to get the dependencies you have added
* create build.yaml file and add the following content
```
targets:
  $default:
    sources:
      - lib/**
      - graphql/**
      - .hypi/generated-schema.graphql
      - generated-schema.graphql
    builders:
      artemis:
        options:
          schema_mapping:
            - schema: .hypi/generated-schema.graphql
              output: lib/models/graphql/graphql_api.dart
              queries_glob: graphql/*.graphql
              naming_scheme: pathedWithFields
          custom_parser_import: 'package:graphbrainz_example/coercers.dart'
          scalar_mapping:
              - graphql_type: DateTime
                dart_type: DateTime
              - graphql_type: Json
                dart_type: Set
              - graphql_type: Long
                dart_type: int
              - graphql_type: Any
                dart_type: String
```
* Run hypi sync to generate schema dart files 

# Usage
<!-- usage -->
```sh-session
$ npm install -g @hypi/cli
$ hypi COMMAND
running command...
$ hypi (-v|--version|version)
@hypi/cli/0.1.0 linux-x64 node-v14.16.0
$ hypi --help [COMMAND]
USAGE
  $ hypi COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [hypi](#hypi)
  - [Install](#install)
  - [Getting started [ReactJS Project]](#getting-started-reactjs-project)
  - [Getting started [Flutter Project]](#getting-started-flutter-project)
- [Usage](#usage)
- [Commands](#commands)
  - [`hypi commands`](#hypi-commands)
  - [`hypi conf [KEY] [VALUE]`](#hypi-conf-key-value)
  - [`hypi help [COMMAND]`](#hypi-help-command)
  - [`hypi init [WEBSITE] [NAME] [LABEL] [DOMAIN]`](#hypi-init-website-name-label-domain)
  - [`hypi login`](#hypi-login)
  - [`hypi plugins`](#hypi-plugins)
  - [`hypi plugins:inspect PLUGIN...`](#hypi-pluginsinspect-plugin)
  - [`hypi plugins:install PLUGIN...`](#hypi-pluginsinstall-plugin)
  - [`hypi plugins:link PLUGIN`](#hypi-pluginslink-plugin)
  - [`hypi plugins:uninstall PLUGIN...`](#hypi-pluginsuninstall-plugin)
  - [`hypi plugins:update`](#hypi-pluginsupdate)
  - [`hypi sync [PLATFORM]`](#hypi-sync-platform)
  - [`hypi update [CHANNEL]`](#hypi-update-channel)
- [Build instructions](#build-instructions)
  - [npm](#npm)
  - [Standalone tarballs](#standalone-tarballs)
  - [Windows installer](#windows-installer)
  - [macOS installer](#macos-installer)
  - [Ubuntu/Debian packages](#ubuntudebian-packages)
  - [Autoupdater](#autoupdater)

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

## `hypi conf [KEY] [VALUE]`

manage configuration

```
USAGE
  $ hypi conf [KEY] [VALUE]

ARGUMENTS
  KEY    key of the config
  VALUE  value of the config

OPTIONS
  -d, --cwd=cwd          config file location
  -d, --delete           delete?
  -h, --help             show CLI help
  -k, --key=key          key of the config
  -n, --name=name        config file name
  -p, --project=project  project name
  -v, --value=value      value of the config
```

_See code: [conf-cli](https://github.com/natzcam/conf-cli/blob/v0.1.9/src/commands/conf.ts)_

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

## `hypi init [WEBSITE] [NAME] [LABEL] [DOMAIN]`

Init a hypi app

```
USAGE
  $ hypi init [WEBSITE] [NAME] [LABEL] [DOMAIN]

OPTIONS
  -h, --help           show CLI help
  -i, --have_instance

EXAMPLES
  $ hypi init -i
  $ hypi init --have_instance
  $ hypi init
```

_See code: [src/commands/init.ts](https://github.com/hypi-universe/cli/blob/v0.1.0/src/commands/init.ts)_

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

_See code: [src/commands/login.ts](https://github.com/hypi-universe/cli/blob/v0.1.0/src/commands/login.ts)_

## `hypi plugins`

list installed plugins

```
USAGE
  $ hypi plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ hypi plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/index.ts)_

## `hypi plugins:inspect PLUGIN...`

displays installation properties of a plugin

```
USAGE
  $ hypi plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] plugin to inspect

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

EXAMPLE
  $ hypi plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/inspect.ts)_

## `hypi plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ hypi plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ hypi plugins:add

EXAMPLES
  $ hypi plugins:install myplugin 
  $ hypi plugins:install https://github.com/someuser/someplugin
  $ hypi plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/install.ts)_

## `hypi plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ hypi plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ hypi plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/link.ts)_

## `hypi plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ hypi plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ hypi plugins:unlink
  $ hypi plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/uninstall.ts)_

## `hypi plugins:update`

update installed plugins

```
USAGE
  $ hypi plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/update.ts)_

## `hypi sync [PLATFORM]`

sync user local schema with hypi

```
USAGE
  $ hypi sync [PLATFORM]

OPTIONS
  -h, --help                              show CLI help
  -p, --platform=flutter|reactjs|angular

EXAMPLES
  $ hypi sync angular
  $ hypi sync -p=angular
  $ hypi sync --platform=angular
```

_See code: [src/commands/sync.ts](https://github.com/hypi-universe/cli/blob/v0.1.0/src/commands/sync.ts)_

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
