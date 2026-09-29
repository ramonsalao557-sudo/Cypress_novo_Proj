import { elements as el } from './elements'

class Inventory {

   validarAcessoAoInventario() {
    cy.location('pathname').should('eq', '/inventory.html')
  }

  validarAcessoAPagina() {
    cy.location('pathname')
  .should('eq', '/inventory.html')
    cy.screenshot('acesso a pagina de inventário')
  }

  adicionarProdutoAoCarrinho(itemName) {
    cy.get(el.addToCart(itemName)).click()
  }

  removerProdutoDoCarrinho(itemName) {
    cy.get(el.removeFromCart(itemName)).click()
  }

}

export default new Inventory()