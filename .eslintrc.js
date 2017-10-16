const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    "extends": "airbnb",
    "parser": 'babel-eslint',
      "parserOptions": {
        "sourceType": 'module',
        "allowImportExportEverywhere": true,
    },
    "rules": {
      "dot-notation": OFF,
      "global-require": OFF,
      "import/no-extraneous-dependencies": OFF,
      "prefer-destructuring": OFF,
      "react/forbid-prop-types": OFF,
      "react/jsx-filename-extension": [WARN, { "extensions": [".js", ".jsx"] }],
      "react/no-array-index-key": OFF,
      "react/require-default-props": OFF
    },
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
    },
};