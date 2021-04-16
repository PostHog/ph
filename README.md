ph
==



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ph.svg)](https://npmjs.org/package/ph)
[![Downloads/week](https://img.shields.io/npm/dw/ph.svg)](https://npmjs.org/package/ph)
[![License](https://img.shields.io/npm/l/ph.svg)](https://github.com/buwilliams/ph/blob/master/package.json)

## Planned commands

- `ph install` installs PostHog locally
- `ph start` starts PostHog in a docker container
- `ph start --ee`
- `ph stop` starts PostHog in a docker container
- `ph test` runs PostHog tests
- `ph test --ee` runs PostHog Enterprise test suite
- `ph build` builds the docker images
- `ph purge` nukes docker containers

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
* [`ph hello [FILE]`](#ph-hello-file)
* [`ph help [COMMAND]`](#ph-help-command)

## `ph hello [FILE]`

describe the command here

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
<!-- commandsstop -->
