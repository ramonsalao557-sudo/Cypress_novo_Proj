import Login from '../pages/login'
import Inventory from '../pages/inventory'
import Header from '../pages/header'
import Cart from '../pages/cart'

describe('Carrinho', () => {

beforeEach(() => {
    // Arrange
    Login.visitarLogin()
    Login.preencherCredenciaisValidas()
    Inventory.validarAcessoAoInventario()
  })

  it('Adicionar produto ao carrinho com sucesso', () => {
    // Act
    const QuantidadeItem = 1
    Inventory.adicionarProdutoAoCarrinho('Sauce Labs Backpack')

    // Assert
    Header.validarCarrinhoPossuiItem(QuantidadeItem)
    Header.navegarParaCarrinho()
    Cart.validarProdutoNoCarrinho('Sauce Labs Backpack')
    
  })

it('Remover produto do carrinho com sucesso', () => {
  // Arrange
  Inventory.adicionarProdutoAoCarrinho('Sauce Labs Backpack')

  // Act
  Inventory.removerProdutoDoCarrinho('Sauce Labs Backpack')

  // Assert
  Header.validarCarrinhoVazio()
  Header.navegarParaCarrinho()
  Cart.validarProdutoNaoEstaNoCarrinho('Sauce Labs Backpack')
})

})