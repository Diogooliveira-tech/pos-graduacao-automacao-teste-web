const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports', // Define o diretório dos relatórios
    overwrite: false,
    html: false,
    json: true, // Gera relatórios em formato JSON
  },
  e2e: {
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // Ativando a captura de screenshots nativo
    screenshotsFolder: 'cypress/screenshots',
    screenshotOnRunFailure: true, // Captura screenshots em caso de falha
  },
});
