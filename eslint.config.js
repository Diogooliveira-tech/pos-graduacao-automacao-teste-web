const cypressGlobals = require('globals').cypress;

module.exports = [
  {
    // Ignora as pastas de relatórios e screenshots
    ignores: ['cypress/reports/**', 'cypress/screenshots/**'],
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
