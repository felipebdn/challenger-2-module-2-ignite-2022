import {
  MapPin,
  CurrencyDollar,
  Bank,
  CreditCard,
  Money,
  Trash,
  Minus,
  Plus,
} from 'phosphor-react'
import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeesContext'
import { InputNumberContainer } from '../Home/styles'
import {
  CheckoutContainer,
  CheckoutLeft,
  CheckoutRight,
  CoffeeCart,
  FormEndereco,
  FormOrder,
  FormPayment,
  InputsForm,
  BlocoInfoCoffee,
  RemoverButton,
  ValuesOrderCoffees,
} from './styles'

export function Checkout() {
  const { coffeesInCart, changeUnityCoffeeInCart } = useContext(CoffeesContext)

  return (
    <CheckoutContainer>
      <CheckoutLeft>
        <h1>Complete seu pedido</h1>
        <FormEndereco>
          <aside>
            <MapPin size={22} />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </aside>
          <InputsForm>
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
          </InputsForm>
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
      </CheckoutLeft>
      <CheckoutRight>
        <h1>Cafés selecionados</h1>
        <FormOrder>
          {coffeesInCart.map((coffee) => {
            console.log(coffee)

            return (
              <CoffeeCart key={coffee.id}>
                <img src={`./assets/coffees/${coffee.img}.svg`} alt="" />
                <BlocoInfoCoffee>
                  <div>
                    <h2>{coffee.title}</h2>
                    <span>R$ {coffee.valorUnidade * coffee.qtd}</span>
                  </div>
                  <main>
                    <RemoverButton>
                      <Trash size={17} />
                      <span>Remover</span>
                    </RemoverButton>
                    <InputNumberContainer>
                      <button
                        onClick={() => changeUnityCoffee(state.id, false)}
                      >
                        <Minus size={14} weight="bold" />
                      </button>
                      <input type="number" value={state.qtd} disabled />
                      <button onClick={() => changeUnityCoffee(state.id, true)}>
                        <Plus size={14} weight="bold" />
                      </button>
                    </InputNumberContainer>
                  </main>
                </BlocoInfoCoffee>
              </CoffeeCart>
            )
          })}
          <ValuesOrderCoffees>
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <p>Total</p>
              <span>R$ 33,20</span>
            </div>
            <button>confirmar pedido</button>
          </ValuesOrderCoffees>
        </FormOrder>
      </CheckoutRight>
    </CheckoutContainer>
  )
}
