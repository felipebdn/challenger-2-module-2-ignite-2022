import {
  MapPin,
  CurrencyDollar,
  Bank,
  CreditCard,
  Money,
  Minus,
  Plus,
  Trash,
} from 'phosphor-react'
import { InputNumber } from '../Home/styles'
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
            <div>
              <div>
                <CreditCard size={22} />
                <span>Cartão de crédito</span>
              </div>
              <div>
                <Bank size={22} />
                <span>cartão de débito</span>
              </div>
              <div>
                <Money size={22} />
                <span>dinheiro</span>
              </div>
            </div>
          </main>
        </FormPayment>
      </main>
      <main>
        <h1>Cafés selecionados</h1>
        <FormOrder>
          <CoffeeCart>
            <img src="" alt="" />
            <div>
              <div>
                <h2>Expresso Tradicional</h2>
                <span>R$ 9,90</span>
              </div>
              <main>
                <InputNumber>
                  <button>
                    <Minus size={14} weight="bold" />
                  </button>
                  <input type="number" value={1} name="" id="" disabled />
                  <button>
                    <Plus size={14} weight="bold" />
                  </button>
                </InputNumber>
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
