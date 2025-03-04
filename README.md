# 🪙**CryptoPulse App**

CryptoPulse transforms cryptocurrency tracking with cutting-edge technology, delivering real-time insights across 500+ digital assets. Our platform combines intuitive design with advanced analytics, empowering traders from beginners to professionals to make informed decisions. Beyond just charts and data, we provide intelligent market predictions, sentiment analysis, and educational resources that demystify the complex world of crypto trading.

## Technologies

- Node v22.14 (a `.nvmrc` is presented for [nvm](https://github.com/nvm-sh/nvm) users).
- [pnpm](https://pnpm.io/workspaces) for manage dependencies.

## Projects

### Directory structure (Next.js 15 - Pages Router)

Includes the project directory structure, below is a concise overview of each component mentioned:

- ##### `.vscode`:

  _The directory contains Visual Studio Code-specific configuration files_

- ##### `components`:

  _Houses reusable React components that can be used across multiple pages_

- ##### `contexts`:

  _Manages React context providers for global state management_

- ##### `graphql`:

  _Contains GraphQL-related files for API interactions_

- ##### `hooks`:

  _Custom React hooks for reusable logic_

- ##### `layouts`:

  _Defines layout components that wrap pages_

- ##### `lib`:

  _Utility functions and helper modules_

- ##### `pages`:

  _Contains Next.js page components and route definitions_

- ##### `public`:

  _Static assets served directly by Next.js_

- ##### `services`:

  _API service layers and external integrations_

- ##### `stores`:

  _State management store configurations_

- ##### `styles`:

  _Styling and global CSS files_

- ##### `svg`:

  _SVG icon and graphic assets_

- ##### `types`:
  _TypeScript type definitions_

## Local Environment

To set up a local environment, we provide an `.env.example` file. Simply create a `.env` file by copying `.env.example` and add your Binance API URL. That's it - you're ready to start coding!

**Note:** Ensure you replace the placeholder [Binance API URL](https://github.com/minh6825/api-binance/blob/main/README.md). with your actual endpoint.

## Bootstrap Project

After cloning the project, please make sure to run the following commands to bootstrap the project:

```bash
npm i -g pnpm@10.5.2
pnpm install
```

### Run Locally

- Run `pnpm run dev` in the root directory
- Or, run `pnpm run dev:or` to specify a different port
