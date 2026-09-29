const { defineConfig } = require('cypress')
const baseConfig = require('./cypress.config')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
  path: path.resolve(__dirname, './.env.dev')
})

console.log('BASE_URL:', process.env.BASE_URL)
console.log('USER:', process.env.USER)
console.log('PASSWORD carregado:', !!process.env.PASSWORD)

module.exports = defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    baseUrl: process.env.BASE_URL,
    env: {
      ...baseConfig.e2e?.env,
      username: process.env.USER,
      password: process.env.PASSWORD
    }
  }
})