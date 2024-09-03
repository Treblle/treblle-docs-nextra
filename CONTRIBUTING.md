# Contributing to Treblle Documentation Platform

## Preparing your enviroment

### Node setup

This repo has managed Node version via `.node-version` file so it's mandatory to have some node version management tool installed.
We recommend either:

-   [fnm](https://github.com/Schniz/fnm) (built with Rust, much faster)
-   [nvm](https://github.com/nvm-sh/nvm)

### Package manager setup

The official package manager for monorepo is defined in root `package.json` file under `packageManager` field.
Our current package manager is [pnpm](https://pnpm.io/).

To install a package manager in currently used Node version run:

```sh
corepack enable
```

## Installing

After `pnpm` is installed run following command from monorepo root:

```sh
pnpm install
```

## Updating dependencies

To check for outdated dependencies, run:

```sh
pnpm outdated
```

For more extensive information see [official docs](https://pnpm.io/cli/outdated)

## Commits and release versioning

Commit standards are based on [`@commitlint/config-conventional`](https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional).

For the sake of simplicity we are using [`commitizen`](https://commitizen.github.io/cz-cli/)

### Creating a commit

-   stage changes you want to commit
-   run `pnpm commit` and follow the instructions
-   push your changes
-   profit 💰
