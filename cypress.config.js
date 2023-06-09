const { defineConfig } = require("cypress");



module.exports = defineConfig({

  watchForFileChanges: false,
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 60000,
  env: {
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  },
  retries: {
    runMode: 2,

  },
  viewportHeight: 800,
  viewportWidth: 1200,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    testIsolation: false,

  },
});
