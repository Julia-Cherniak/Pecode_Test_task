const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  // defaultCommandTimeout: 9000,
  //pageLoadTimeout: 20000,
  e2e: {
    baseUrl: 'https://allo.ua',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
  video: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
      embeddedScreenshots: true,
      reportFilename: 'mochawesome',
      reportDir: 'mochawesomeReports',
      mochaFile: 'reports/test-results-[hash].xml'
  },
});
