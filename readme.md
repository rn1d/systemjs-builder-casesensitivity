# About

This project demonstrates case sensitivity when building bundles with [systemjs-builder](https://github.com/systemjs/builder).

1. Run `npm install` to install dependencies
2. Run `gulp` to compile TypeScript source and generate bundles with `systemjs-builder`

Inspect the generated bundles and observe that `app/deps.bundle.js` incorrectly contains modules from `/app/**/*`. See `main.ts` for the `import` statements that cause this.  