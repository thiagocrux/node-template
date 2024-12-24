# Node.js Project Template

A streamlined template to kickstart Node.js projects with TypeScript.

## Technologies

This template comes pre-configured with the following technologies:

- `express`: A web framework for Node.js, used to build APIs and web servers.
- `cross-env`: Cross-platform environment variable configuration.
- `eslint`: A linting tool for JavaScript/TypeScript code.
- `lint-staged`: Runs linters on Git staged files.
- `msw`: Mock Service Worker to intercept network requests during tests.
- `prettier`: A code formatter.
- `typescript`: A programming language that is a superset of JavaScript and adds typing.
- `vitest`: A testing framework for JavaScript/TypeScript.

_For more information about other dependencies, see the `package.json` file._

## Installation

1. Create a new repository from the template:

```bash
gh repo create your-new-repo-name --template thiagocrux/node-template
```

2. Browse to the project folder:

```bash
cd your-project-folder
```

3. Install dependencies:

```
pnpm install
```

## Configuration

1. Create a `.env` file in the root directory of the project and define your variables. For example:

```
API_PORT=3000
```

2. Refer to the `.env.example` file for guidance.

## Available scripts

This section describes the available scripts in the `package.json` file and their functionalities.

### Development

- #### `dev`

  Starts the server in development mode using `nodemon`, which automatically restarts the server when file changes are detected.

  ```bash
  pnpm dev
  ```

### Production

- #### `build`

  Compiles the TypeScript code into JavaScript and places the output in the dist folder. Clears the folder beforehand to avoid leftover files.

  ```bash
  pnpm build
  ```

- #### `start`

  Runs the compiled application in production mode.

  ```bash
  pnpm start
  ```

### Testing

- #### `test`

  Runs all tests using the `vitest` framework with parallel processing for better performance.

  ```bash
  pnpm test
  ```

- #### `test:coverage`

  Executes tests and generates a code coverage report.

  ```bash
  pnpm test:coverage
  ```

- #### `test:ui`

  Opens an interactive UI for managing and running tests.

  ```bash
  pnpm test:ui
  ```

### Code quality

- #### `lint`

  Analyzes your codebase for potential errors and style violations using `eslint`.

  ```bash
  pnpm lint
  ```

- #### `lint:fix`

  Automatically fixes style issues and errors when possible.

  ```bash
  pnpm lint:fix
  ```

### Git hooks

- #### `prepare`

  Automatically configures Git hooks (via `husky`) before each commit.

  ```bash
  pnpm prepare
  ```

## Useful links

- [Express](https://expressjs.com/)
- [ESLint](https://eslint.org/)
- [Vitest](https://vitest.dev/)
- [Mock Service Worker](https://mswjs.io/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
