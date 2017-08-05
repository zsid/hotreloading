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
      "react/jsx-filename-extension": [WARN, { "extensions": [".js", ".jsx"] }],
      "react/forbid-prop-types": OFF,
      "dot-notation": OFF,
      "react/no-array-index-key": OFF,
      "react/require-default-props": OFF,
      "global-require": OFF,
      "import/no-extraneous-dependencies": OFF,
    },
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
    },
};