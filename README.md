# vue-multi-app-typescript

> Vue multi application template, optimized from Vue CLI 3 typescript template.

## Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
# mobile
yarn run serve-mobile

# pc
yarn run serve-pc
```

### Compiles and minifies for production

```bash
# mobile
yarn run build-mobile

# pc
yarn run build-pc
```

### Lints and fixes files

```bash
yarn run lint
```

## Add Another App: pad

### 1. Modify the scripts filed in `package.json`

```json
"serve-pad": "vue-cli-service serve --mode pad-dev",
"build-pad": "vue-cli-service build --mode pad-prod",
"build": "npm run build-pc && npm run build-mobile && npm run build-pad"
```

### 2. Add two `.env` files in your project root

- `.env.pad-dev`:

  ```plain
  NODE_ENV=development
  VUE_APP_PLATFORM=pad
  ```

- `.env.pad-prod`:

  ```plain
  NODE_ENV=development
  VUE_APP_PLATFORM=pad
  ```

### 3. Copy the `pc` folder and rename it to `pad`

### 4. Run

```bash
npm run serve-pad

npm run build-pad

npm run build
```

## Code Formatter

Editor is VSCode, and install the following plugins:

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
