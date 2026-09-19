import login from '../pages/login'
import inventory from '../pages/inventory'

describe('Login', () => {

  beforeEach(() => {
    login.visitarLogin()
  })

  it('Realizar login com sucesso', () => {
    login.preencherCredenciaisValidas()
    
    // Altere de Inventory.validarPagina() para:
    inventory.validarAcessoAPagina()
  })

  it('Realizar login informando credenciais inválidas', () => {
    login.preencherCredenciaisInvalidas()
    login.validarErroCredenciaisInvalidas()
  })

})
