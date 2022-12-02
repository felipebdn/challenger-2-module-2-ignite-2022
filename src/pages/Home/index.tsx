import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeesContext'
import { defaultTheme } from '../../Global/themes/default'
import {
  AtributesCoffee,
  CartCoffes,
  CartHomeHeader,
  HomeCoffees,
  HomeContainer,
  TitleHome,
  HeaderCoffees,
  FooterCoffees,
  InputNumberContainer,
  CartContainerHome,
} from './styles'

export function Home() {
  const { coffees, changeUnityCoffee } = useContext(CoffeesContext)

  return (
    <>
      <HomeContainer>
        <main>
          <TitleHome>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleHome>
          <AtributesCoffee>
            <aside>
              <CartHomeHeader color={defaultTheme.produto['yellow-dark']}>
                <div>
                  <ShoppingCart size={16} weight="fill" />
                </div>
                <span>Compra simples e segura</span>
              </CartHomeHeader>
              <CartHomeHeader color={defaultTheme.produto.yellow}>
                <div>
                  <Timer size={16} weight="fill" />
                </div>
                <span>Entrega rápida e rastreada</span>
              </CartHomeHeader>
            </aside>
            <aside>
              <CartHomeHeader color={defaultTheme.produto.cinza}>
                <div>
                  <Package size={16} weight="fill" />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </CartHomeHeader>
              <CartHomeHeader color={defaultTheme.produto['purple-dark']}>
                <div>
                  <Coffee size={16} weight="fill" />
                </div>
                <span>O café chega fresquinho até você</span>
              </CartHomeHeader>
            </aside>
          </AtributesCoffee>
        </main>
        <aside>
          <img src="./assets/coffeeHome.svg" alt="" />
        </aside>
      </HomeContainer>
      <HomeCoffees>
        <h1>Nossos cafés</h1>
        <section>
          {coffees.map((state, i, array) => {
            return (
              <CartCoffes key={state.id}>
                <HeaderCoffees>
                  <img src={`./assets/coffees/${state.img}.svg`} alt="" />
                  <div>
                    {state.typeCoffee.map((stateType, i) => {
                      return <span key={i}>{stateType}</span>
                    })}
                  </div>
                  <h2>{state.title}</h2>
                  <p>{state.subtitle}</p>
                </HeaderCoffees>
                <FooterCoffees>
                  <p>
                    R$ <span>{state.valorUnidade}</span>
                  </p>
                  <div>
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
                    <CartContainerHome
                    // onClick={() => handleAddCoffeeCart(state.id)}
                    >
                      <ShoppingCart size={22} weight="fill" />
                    </CartContainerHome>
                  </div>
                </FooterCoffees>
              </CartCoffes>
            )
          })}
        </section>
      </HomeCoffees>
    </>
  )
}
