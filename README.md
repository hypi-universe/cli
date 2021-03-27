hypi
====

hypi command line interface

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
* [`hypi login`](#hypi-login)
* [`hypi sync`](#hypi-sync)
* [`hypi help [COMMAND]`](#hypi-help-command)

## `hypi login`

login to hypi with your account

```
USAGE
  $ hypi login -i

OPTIONS
  -i, --interactive

EXAMPLE
  $ hypi login -i
  email?:test@test.com
  passwordd?:your-password
```
## `hypi sync`

sync your local schema with hypi

```
USAGE
  $ hypi sync

EXAMPLE
  $ hypi sync
```

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

<!-- commandsstop -->
