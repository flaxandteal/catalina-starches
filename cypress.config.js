const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:1313',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.spec.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    }
  }
});
