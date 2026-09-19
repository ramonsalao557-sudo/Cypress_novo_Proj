import { elements as el } from './elements'

class Login {
  visitarLogin() {
    cy.visit('https://www.saucedemo.com/')
  }

  preencherCredenciaisValidas() {
    cy.get(el.username).type('standard_user')
    cy.get(el.password).type('secret_sauce')
    cy.get(el.loginButton).click()
  }

  // Altere de 'preenchercredenciaisInvalidas' para 'preencherCredenciaisInvalidas'
  preencherCredenciaisInvalidas() {
    cy.get(el.username).type('user.invalid')
    cy.get(el.password).type('senha')
    cy.get(el.loginButton).click()
  }

  validarErroCredenciaisInvalidas() {
    cy.get(el.errorMessage)
      .should(
        'contain.text',
        'Epic sadface: Username and password do not match any user in this service'
      )
    
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.screenshot('erro ao tentar logar com credenciais inválidas')
  }
}

export default new Login()