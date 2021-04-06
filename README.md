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
$ npm install -g @hypi/hypi
$ hypi COMMAND
running command...
$ hypi (-v|--version|version)
@hypi/hypi/0.0.0 linux-x64 node-v14.16.0
$ hypi --help [COMMAND]
USAGE
  $ hypi COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hypi commands`](#hypi-commands)
* [`hypi conf [KEY] [VALUE]`](#hypi-conf-key-value)
* [`hypi help [COMMAND]`](#hypi-help-command)
* [`hypi login`](#hypi-login)
* [`hypi sync`](#hypi-sync)

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

## `hypi login`

Login to hypi

```
USAGE
  $ hypi login

OPTIONS
  -e, --email=email        your email
  -h, --help               show CLI help
  -i, --interactive
  -p, --password=password  your password

EXAMPLE
  $ hypi login your@email.com your-password
```

_See code: [src/commands/login.ts](https://github.com/engeman2008/hypi/blob/v0.0.0/src/commands/login.ts)_

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

_See code: [src/commands/sync.ts](https://github.com/engeman2008/hypi/blob/v0.0.0/src/commands/sync.ts)_
<!-- commandsstop -->
