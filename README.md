![ph](ph.png "ph")

Inspired by [heroku](https://devcenter.heroku.com/articles/heroku-cli), [cargo](https://doc.rust-lang.org/cargo/index.html), and [go](https://golang.org/cmd/go/) command-line tools which aim to make localhost development painless for us.

## Prerequisites

- `yarn`
- `git`
- `nodejs` >= 12
- `docker` >= 3.3.0

## Install ph

```sh
% git clone https://github.com/PostHog/ph.git
% cd ph
% yarn install
% yarn link # puts ph in your path
```

## Basic commands

```sh
% ph install # clones and installs dependencies on your machine
% ph up # starts posthog with docker on your machine
% ph down # stops posthog
% ph test # runs posthog test cases
```