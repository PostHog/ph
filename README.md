ph
==

Command-line utility to install, run, and manage PostHog.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ph.svg)](https://npmjs.org/package/ph)
[![Downloads/week](https://img.shields.io/npm/dw/ph.svg)](https://npmjs.org/package/ph)
[![License](https://img.shields.io/npm/l/ph.svg)](https://github.com/buwilliams/ph/blob/master/package.json)

## Table of Contents

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ph
$ ph COMMAND
running command...
$ ph (-v|--version|version)
ph/0.0.0 darwin-arm64 node-v15.12.0
$ ph --help [COMMAND]
USAGE
  $ ph COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ph build [FILE]`](#ph-build-file)
* [`ph down [FILE]`](#ph-down-file)
* [`ph hello [FILE]`](#ph-hello-file)
* [`ph help [COMMAND]`](#ph-help-command)
* [`ph install`](#ph-install)
* [`ph nuke [FILE]`](#ph-nuke-file)
* [`ph test [FILE]`](#ph-test-file)
* [`ph uninstall [FILE]`](#ph-uninstall-file)
* [`ph up [FILE]`](#ph-up-file)

## `ph build [FILE]`

describe the command here

```
USAGE
  $ ph build [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/build.ts](https://github.com/buwilliams/ph/blob/v0.0.0/src/commands/build.ts)_

## `ph down [FILE]`

describe the command here

```
USAGE
  $ ph down [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/down.ts](https://github.com/buwilliams/ph/blob/v0.0.0/src/commands/down.ts)_

## `ph hello [FILE]`

prints hello world

```
USAGE
  $ ph hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ ph hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/buwilliams/ph/blob/v0.0.0/src/commands/hello.ts)_

## `ph help [COMMAND]`

display help for ph

```
USAGE
  $ ph help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `ph install`

install posthog

```
USAGE
  $ ph install

OPTIONS
  -p, --path=path  path to install posthog
  -v, --verbose
```

_See code: [src/commands/install.ts](https://github.com/buwilliams/ph/blob/v0.0.0/src/commands/install.ts)_

## `ph nuke [FILE]`

describe the command here

```
USAGE
  $ ph nuke [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/nuke.ts](https://github.com/buwilliams/ph/blob/v0.0.0/src/commands/nuke.ts)_

## `ph test [FILE]`

describe the command here

```
USAGE
  $ ph test [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/test.ts](https://github.com/buwilliams/ph/blob/v0.0.0/src/commands/test.ts)_

## `ph uninstall [FILE]`

describe the command here

```
USAGE
  $ ph uninstall [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/uninstall.ts](https://github.com/buwilliams/ph/blob/v0.0.0/src/commands/uninstall.ts)_

## `ph up [FILE]`

describe the command here

```
USAGE
  $ ph up [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/up.ts](https://github.com/buwilliams/ph/blob/v0.0.0/src/commands/up.ts)_
<!-- commandsstop -->
