module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  extends: [
    "airbnb",
    "prettier",
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "./rules/eslint-best-practices.js",
    "./rules/eslint-errors.js",
    "./rules/eslint-es6.js",
    "./rules/eslint-node.js",
    "./rules/eslint-style.js",
    "./rules/eslint-variables.js",
    "./rules/react.js",
    "./rules/react-hooks.js",
    "./rules/prettier.js",
  ],
  plugins: ["jsx-a11y", "react", "react-hooks", "html", "prettier"],
  rules: {},
  settings: {
    react: {
      version: "detect",
    },
  },
};
