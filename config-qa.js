const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')

module.exports = defineConfig({

  e2e: {

    baseUrl: 'https://www.qa.saucedemo.com/',
    env: {

      username: 'QA_sauce',
      password: 'QA_secret'
    }
  }
})