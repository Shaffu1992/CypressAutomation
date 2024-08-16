const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',////for generating html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);///for  html reports
    },
  },
});


const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
})



const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'reporters/custom.js',
})

