const cypressGlobals = require('globals').cypress;

module.exports = [
  {
    ignores: ['cypress/reports/**'], // Ignora a pasta de relatórios
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...cypressGlobals,
        browser: true,
        node: true,
      },
    },
    plugins: {
      cypress: require('eslint-plugin-cypress'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      ...require('eslint-plugin-cypress').configs.recommended.rules,
      ...require('eslint-config-prettier').rules,
      'prettier/prettier': 'error',
    },
  },
];
