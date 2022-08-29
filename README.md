# @enhala/eslint-plugin-tsvue

An `eslint` plugin companion to Vue, TypeScript, and Babel. `@enhala/eslint-plugin-tsvue` allows having Vue 3 or Vue 2.7 Single File Components with `setup` and `lang="ts"`, i.e. Options API, Composition API, all at the same time, mixed and matched, in one repository, and enables proper linting of all types of Components.

Enabling the plugin for ESLint, converts in the background SFCs with `lang="ts"` filenames to `.tsvue` extension, which then allows defining custom parsers.
Note: the actual files don't change in any way, this is just for ESLint and further parsing within ESLint.

_Inspired by [mjeanroy/eslint-plugin-tsvue-sample](https://github.com/mjeanroy/eslint-plugin-tsvue-sample)._

### Install

```sh
# npm
npm install -D @enhala/eslint-plugin-tsvue
# yarn
yarn add -D @enhala/eslint-plugin-tsvue
```

### Use

To use, enable the plugin by defining `@enhala/tsvue` in `plugins` array of your `.eslintrc.js` **before** `vue` plugin.
Now that Vue SFCs with `lang="ts"` have `.tsvue` extensions, it's possible to define custom parsers, like `@typescript-eslint/parser` by using `overrides`.

```js
// .eslintrc.js
module.exports = {
  plugins: ['@babel', '@enhala/tsvue', 'vue', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.tsvue'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.tsvue'],
      },
    },
  ],
};
```

In case of `@typescript-eslint/parser`, we have to also set [`parserOptions.extraFileExtensions`](https://www.npmjs.com/package/@typescript-eslint/parser#parseroptionsextrafileextensions), so that parser won't ignore the file. With other parsers, please consult their documentation.

This works not only for TypeScript. For example, for `lang="foo"`, the file extension would become `.foovue` and it's possible to then set any parser using overrides.
