import { zodResolver } from '@hookform/resolvers/zod'
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
import { FormProvider, useForm } from 'react-hook-form'
import { InputsForm } from '../../components/FormCheckout'
import { CoffeesContext } from '../../context/CoffeesContext'
import { InputNumberContainer } from '../Home/styles'
import * as zod from 'zod'
import {
  CheckoutContainer,
  CheckoutLeft,
  CheckoutRight,
  CoffeeCart,
  FormEndereco,
  FormOrder,
  FormPayment,
  BlocoInfoCoffee,
  RemoverButton,
  ValuesOrderCoffees,
} from './styles'

const FormCheckoutValidationSchema = zod.object({
  cep: zod.number().min(8).max(8),
  rua: zod.string().min(1, 'Informe a rua'),
  numero: zod.number().min(1, 'Informe o número'),
  complemento: zod.string(),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(2, 'Informe o estado').max(2),
})

type FormCheckoutData = zod.infer<typeof FormCheckoutValidationSchema>

export function Checkout() {
  const {
    coffeesInCart,
    changeUnityCoffeeInCart,
    valorTotalCoffees,
    deleteCoffeeById,
  } = useContext(CoffeesContext)

  const FormCheckout = useForm<FormCheckoutData>({
    resolver: zodResolver(FormCheckoutValidationSchema),
    defaultValues: {
      cep: undefined,
      rua: '',
      numero: undefined,
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  const { handleSubmit, watch, reset } = FormCheckout

  function teste(data: FormCheckoutData) {
    console.log(data)
  }

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
          <FormProvider {...FormCheckout}>
            <InputsForm />
          </FormProvider>
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
            const numberFormat = new Intl.NumberFormat('pt-BR').format(
              coffee.valorUnidade * coffee.qtd,
            )
            return (
              <CoffeeCart key={coffee.id}>
                <img src={`./assets/coffees/${coffee.img}.svg`} alt="" />
                <BlocoInfoCoffee>
                  <div>
                    <h2>{coffee.title}</h2>
                    <span>R$ {numberFormat}</span>
                  </div>
                  <main>
                    <RemoverButton
                      onClick={(event) => {
                        event.preventDefault()
                        deleteCoffeeById(coffee.id)
                      }}
                    >
                      <Trash size={17} />
                      <span>Remover</span>
                    </RemoverButton>
                    <InputNumberContainer>
                      <button
                        onClick={(event) => {
                          event.preventDefault()
                          changeUnityCoffeeInCart(coffee.id, false)
                        }}
                      >
                        <Minus size={14} weight="bold" />
                      </button>
                      <input type="number" value={coffee.qtd} disabled />
                      <button
                        onClick={(event) => {
                          event.preventDefault()
                          changeUnityCoffeeInCart(coffee.id, true)
                        }}
                      >
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
              <span>
                R$ {new Intl.NumberFormat('pt-BR').format(valorTotalCoffees)}
              </span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <p>Total</p>
              <span>
                R${' '}
                {new Intl.NumberFormat('pt-BR').format(valorTotalCoffees + 3.5)}
              </span>
            </div>
            <form onSubmit={handleSubmit(teste)}>
              <button type="submit">confirmar pedido</button>
            </form>
          </ValuesOrderCoffees>
        </FormOrder>
      </CheckoutRight>
    </CheckoutContainer>
  )
}
