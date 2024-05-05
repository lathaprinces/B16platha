const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
  // "baseUrl":"https://opensource-demo.orangehrmlive.com/",
    "defaultCommandTimeout":50000,
    "pageLoadTimeout":120000,
   // "retries":{openMode: 1, runMode: 1},
   //"watchForFileChanges":false,
    //env:{
      //"username":"Admin",
      //"password":"admin123",
      //"loginurl": "https://opensource-demo.orangehrmlive.com/"
    //},
     //"video":true,
    //"viewportWidth":1366,
   // "viewportHeight":768,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      allureWriter(on, config);
            return config;
    },
  },
});
