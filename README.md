![ph](ph_small.png "ph")

Inspired by [heroku](https://devcenter.heroku.com/articles/heroku-cli), [cargo](https://doc.rust-lang.org/cargo/index.html), and [go](https://golang.org/cmd/go/) command-line tools which aim to make localhost development painless for us. While some developers will prefer to manage their own environment, I wanted to provide a simple tool to get up and running with PostHog quickly.

## Prerequisites

- `yarn`
- `git`
- `nodejs` >= 12
- `docker` >= 3.3.0 (to support new Apple chips)

## Install ph

```sh
% git clone https://github.com/PostHog/ph.git
% cd ph
% yarn install
% yarn link         # puts ph on your path to run from everywhere
```

## Basic commands

```sh
% ph install        # clones and installs dependencies on your machine
% ph up             # starts posthog with docker on your machine
% ph down           # stops posthog
% ph test           # runs posthog test cases
% ph help           # list all cli commands
% ph help [command] # show usage for a specific command
```

## Project

You can track progress on the [project](PROJECT.md) page.