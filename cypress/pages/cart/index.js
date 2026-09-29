import { elements as el } from './elements'

class Cart {

  validarProdutoNoCarrinho(name) {
    cy.get(el.cartItem)
      .should('contain.text', name)
  }

  validarProdutoNaoEstaNoCarrinho(name) {
    cy.get('body')
      .should('not.contain.text', name)
  }
}

export default new Cart()