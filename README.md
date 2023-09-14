# What I did

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

<details>

<summary>Setup to use import alias</summary>

- Add `vite-tsconfig-paths` and use it on `vite.config.ts`
- Add config to `paths` on `tsconfig.json`
- Eliminate relative imports which goes through parent directories

</details>
