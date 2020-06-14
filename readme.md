# eslint-config-iamdarshshah :bookmark: 

<a href="https://www.npmjs.com/package/eslint-config-iamdarshshah">
    <img alt="npm" src="https://img.shields.io/npm/v/eslint-config-iamdarshshah.svg?color=FB3B49&style=flat-square">
</a>

_My personal [eslint-prettier][1] configuration._

## Local / Per Project Installation :package:

This package is hosted on [npm][2].

Install the configuration and it's peer dependencies as a development dependency.

```
npx install-peerdeps --dev eslint-config-iamdarshshah
```

> This installs peer dependencies automatically using [npx][3] and [install-peerdeps][4] so you don't have to!

## Usage :hammer:

Create an `.eslintrc` file in the root of your project. Your `.eslintrc` file should look like this:

```json
{
  "extends": ["iamdarshshah"]
}
```

Tip: You can alternatively put this object in your `package.json` under the property `"eslintConfig":`. This makes one less file in your project.

> You can add more ESLint configuration options in this file if you want.

## Questions ❔

If you have any trouble, definitely [open an issue][5] and I'll take a look.

Or you can consult the [ESLint Shareable Configs documentation][6].

And if all else fails, you can ask me directly on [Twitter][7].

## Inspired By :rocket: 

- [Brad Garropy][8]
- [Kent C. Dodds][9]
- [Wes Bos][10]

[1]: https://eslint.org
[2]: https://www.npmjs.com/package/eslint-config-iamdarshshah
[3]: https://www.npmjs.com/package/npx
[4]: https://www.npmjs.com/package/install-peerdeps
[5]: https://github.com/iamdarshshah/eslint-config-iamdarshshah/issues
[6]: https://eslint.org/docs/developer-guide/shareable-configs
[7]: https://twitter.com/iamdarshshah
[8]: https://twitter.com/bradgarropy
[9]: https://twitter.com/kentcdodds
[10]: https://twitter.com/wesbos
