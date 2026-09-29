import { elements as el } from './elements'

class Login {

  visitarLogin() {
    cy.visit('/')
  }

  preencherCredenciaisValidas() {
    cy.env(['username', 'password']).then(({ username, password }) => {
      cy.get(el.username).type(username)
      cy.get(el.password).type(password)
      cy.get(el.loginButton).click()
    })
  }

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

    cy.location('pathname').should('eq', '/')

    cy.screenshot('erro ao tentar logar com credenciais inválidas')
  }
}

export default new Login()