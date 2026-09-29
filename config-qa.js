const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')

module.exports = defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    baseUrl: 'https://www.qa.saucedemo.com/',
    env: {
      ...baseConfig.e2e?.env,
      username: 'QA_sauce',
      password: 'QA_secret'
    }
  }
})