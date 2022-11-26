import {
  MapPin,
  CurrencyDollar,
  Bank,
  CreditCard,
  Money,
  Trash,
} from 'phosphor-react'
import { InputNumber } from '../../components/assets'
import {
  CheckoutContainer,
  CoffeeCart,
  FormEndereco,
  FormOrder,
  FormPayment,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <main>
        <h1>Complete seu pedido</h1>
        <FormEndereco>
          <header>
            <MapPin size={22} />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
          <main>
            <input type="number" name="" id="" placeholder="CEP" />
            <input type="text" name="" id="" placeholder="Rua" />
            <div>
              <input type="number" name="" id="" placeholder="Número" />
              <input type="text" name="" id="" placeholder="Complemento" />
            </div>
            <div>
              <input type="text" name="" id="" placeholder="Bairro" />
              <input type="text" name="" id="" placeholder="Cidade" />
              <input type="text" name="" id="" placeholder="UF" />
            </div>
          </main>
        </FormEndereco>
        <FormPayment>
          <header>
            <CurrencyDollar size={22} />
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>
          <main>
            <button>
              <CreditCard size={22} />
              <span>cartão de crédito</span>
            </button>
            <button>
              <Bank size={22} />
              <span>cartão de débito</span>
            </button>
            <button>
              <Money size={22} />
              <span>dinheiro</span>
            </button>
          </main>
        </FormPayment>
      </main>
      <main>
        <h1>Cafés selecionados</h1>
        <FormOrder>
          <CoffeeCart>
            <img src="./assets/coffees/latte.svg" alt="" />
            <div>
              <div>
                <h2>Expresso Tradicional</h2>
                <span>R$ 9,90</span>
              </div>
              <main>
                <InputNumber />
                <button>
                  <Trash size={22} />
                  Remover
                </button>
              </main>
            </div>
          </CoffeeCart>
        </FormOrder>
      </main>
    </CheckoutContainer>
  )
}
