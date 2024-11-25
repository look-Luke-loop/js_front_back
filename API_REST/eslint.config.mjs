import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configAirbnb from 'eslint-config-airbnb';
import configPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'prettier/prettier': 2,
      'react/jsx-filename-extension': 0,
      'import/prefer-default-export': 0,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-console:' : 'off',
      'class-methods-use-this':'off'
    },
  },
  pluginJs.configs.recommended,
  configAirbnb,
  configPrettier,
];
