hypi
====

hypi command line interface

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/hypi.svg)](https://npmjs.org/package/hypi)
[![CircleCI](https://circleci.com/gh/engeman2008/hypi/tree/master.svg?style=shield)](https://circleci.com/gh/engeman2008/hypi/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/hypi.svg)](https://npmjs.org/package/hypi)
[![License](https://img.shields.io/npm/l/hypi.svg)](https://github.com/engeman2008/hypi/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g hypi
$ hypi COMMAND
running command...
$ hypi (-v|--version|version)
hypi/0.0.0 linux-x64 node-v14.16.0
$ hypi --help [COMMAND]
USAGE
  $ hypi COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hypi hello [FILE]`](#hypi-hello-file)
* [`hypi help [COMMAND]`](#hypi-help-command)

## `hypi hello [FILE]`

describe the command here

```
USAGE
  $ hypi hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ hypi hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/engeman2008/hypi/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
