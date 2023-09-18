# Single page app template by kxphotographer

## Frameworks and tools

- Vite
- Preact
- Typescript
- Tailwind CSS
- ESLint
- Prettier

## Manual setup after initializing Preact project

- Added Tailwind CSS
- Configured import aliases on `tsconfig.json`
  - To eliminate parent-traversing relative import
  - Make Vite respect the config using `vite-tsconfig-paths`
- Enabled strict mode on `tsconfig.json`
  - To opt in strict options which are currently available and will be available in the future
- Set up linters
  - ESLint for code structure
    - i.e. hook dependencies, using `eslint-plugin-react-hooks` which `eslint-config-preact` includes
  - Prettier for code format
    - Once I wondered if I set `semi` `false` to require trailing semicolons, but they cannot be omitted in some cases (i.e. [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) after another function definition). So I finally decided to require them.
  - Run them on Github Actions when pushed

## Future plan

- Linting import statements (order, vertical whitespaces between groups)
- Unit tesging by Jest

## Command line memo

<details>

<summary>Initializing preact project</summary>

```
$ yarn create preact
yarn create v1.22.19
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Installed "create-preact@0.2.1" with binaries:
      - create-preact
[#####################################################################] 239/239
┌  Preact - Fast 3kB alternative to React with the same modern API
│
◇  Project directory:
│  preact-template
│
◇  Project Type:
│  Single Page Application (only client-side)
│
◇  Project language:
│  TypeScript
│
◇  Use router?
│  Yes
│
◇  Use ESLint?
│  Yes
│
◇  Set up project directory
│
◇  Installed project dependencies
│
◇  Getting Started ──────╮
│                        │
│  $ cd preact-template  │
│  $ yarn dev            │
│                        │
├────────────────────────╯
│
└  You're all set!

✨  Done in 40.15s.

```

</details>
