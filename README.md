Sure! Here's your updated README with the MIT license added:

---

# Next_Portfolio

## Tech Stack

- Next.js 14.2.4
- TailwindCSS

## Getting started

### Cloning the repository

Firstly, you need to clone the repository. You can do it like this:

```bash
# Using Git
git clone https://github.com/itzaRinna/N_Portfolio.git
```

Alternatively, you can also clone it using [GitHub Desktop](https://desktop.github.com/) application.

### Setup using NPM

This starter kit currently uses NPM as the package manager. Follow the steps below to correctly set up the project on your machine, and ensure everything works as expected.

First, install the modules and dependencies:

```bash
npm install
```

When that's done, you can proceed to run the project locally.

### Setup using different package managers

Follow the steps below to correctly set up the project on your machine, and ensure everything works as expected.

Since you won't use NPM, you need to remove the `package-lock.json` to prevent any possible conflicts.

Install the modules and dependencies:

```bash
# Using pnpm
pnpm install

# Using yarn
yarn install

# Using bun
bun install
```

If you don't use any of these, find the equivalent command for your package manager.

#### Running the project

In order to verify if everything is working properly and to further customize the project to your own SaaS, you need to start a local development server. You can do so using any of the following commands:

```bash
cd source
```

```bash
# Using npm
npm run dev

# Using pnpm
pnpm run dev

# Using yarn
yarn run dev

# Using bun
bun run dev
```

It should output something like this:

```bash
  ▲ Next.js 14.2.4
  - Local:        http://localhost:3000
  - Environments: .env.local

  ✓ Starting...
  ✓ Ready in 2.4s
```

If this is the case, you can just **CTRL** + **Click** on http://localhost:3000, or manually open it in your browser.

If this is not the case, make sure you didn't miss any of the steps before. If the error persists and you don't know what to do, open an issue [here](https://github.com/NizarAbiZaher/nizzy-starter/issues).

### That's it!

You should now be able to edit and change whatever you'd like. If you are having trouble with specific libraries, make sure to check out the respective documentation and properly research the issue.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
