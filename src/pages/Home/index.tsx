import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Cart, InputNumber } from '../../components/assets'
import { defaultTheme } from '../../Global/themes/default'
import { v4 as uuidv4 } from 'uuid'
import {
  AtributesCoffee,
  CartCoffes,
  CartHomeHeader,
  HomeCoffees,
  HomeContainer,
  TitleHome,
  HeaderCoffees,
  FooterCoffees,
} from './styles'
import { useState } from 'react'

const coffees = [
  {
    id: uuidv4(),
    img: 'expressoTradicional',
    typeCoffee: ['tradicional'],
    title: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    valorUnidade: 9.9,
    qtd: 1,
  },
  {
    id: uuidv4(),
    img: 'expressoAmericano',
    typeCoffee: ['tradicional'],
    title: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    valorUnidade: 9.9,
    qtd: 1,
  },
  {
    id: uuidv4(),
    img: 'expressoCremoso',
    typeCoffee: ['tradicional'],
    title: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    valorUnidade: 9.9,
    qtd: 1,
  },
  {
    id: uuidv4(),
    img: 'expressoGelado',
    typeCoffee: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    valorUnidade: 9.9,
    qtd: 1,
  },
  {
    id: uuidv4(),
    img: 'cafeComLeite',
    typeCoffee: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    valorUnidade: 9.9,
    qtd: 1,
  },
  {
    id: uuidv4(),
    img: 'latte',
    typeCoffee: ['tradicional', 'com leite'],
    title: 'Latte',
    subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    valorUnidade: 9.9,
    qtd: 1,
  },
  {
    id: uuidv4(),
    img: 'capuccino',
    typeCoffee: ['tradicional', 'com leite'],
    title: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    valorUnidade: 9.9,
    qtd: 1,
  },
  {
    id: uuidv4(),
    img: 'macchiato',
    typeCoffee: ['tradicional', 'com leite'],
    title: 'Macchiato',
    subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    valorUnidade: 9.9,
    qtd: 1,
  },
  {
    id: uuidv4(),
    img: 'mocaccino',
    typeCoffee: ['tradicional', 'com leite'],
    title: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    valorUnidade: 9.9,
    qtd: 1,
  },
  {
    id: uuidv4(),
    img: 'chocolateQuente',
    typeCoffee: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    valorUnidade: 9.9,
    qtd: 1,
  },
  {
    id: uuidv4(),
    img: 'cubano',
    typeCoffee: ['especial', 'alcoólico', 'com leite'],
    title: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    valorUnidade: 9.9,
    qtd: 1,
  },
  {
    id: uuidv4(),
    img: 'havaiano',
    typeCoffee: ['especial'],
    title: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    valorUnidade: 9.9,
    qtd: 1,
  },
  {
    id: uuidv4(),
    img: 'arabe',
    typeCoffee: ['especial'],
    title: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    valorUnidade: 9.9,
    qtd: 1,
  },
  {
    id: uuidv4(),
    img: 'irlandes',
    typeCoffee: ['especial', 'alcoólico'],
    title: 'Irlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    valorUnidade: 9.9,
    qtd: 1,
  },
]

/**
 *  id: uuidv4(),
    img: 'expressoTradicional',
    typeCoffee: ['tradicional'],
    title: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    valorUnidade: 9.9,
    qtd: 1,
 */
type typeCoffee = {
  type: string
}

interface coffeesCartProps {
  id: string
  img: string
  typeCoffee: typeCoffee[]
  title: string
  subtitle: string
  valorUnidade: number
  qtd: number
}

export function Home() {
  const [coffeesCart, setCoffeesCart] = useState()

  function handleRemoveUnityCoffee(add: string) {}

  // function handleAddUnityCoffee(id: string, qtd: number) {
  //   setCoffees(
  //     coffees.map((state) => {
  //       if (state.id === id) {
  //         const quantidade = state.qtd + 1
  //         return { ...state, qtd: quantidade }
  //       } else {
  //         return state
  //       }
  //     }),
  //   )
  // }
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
          {coffees.map((state) => {
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
                    {/* <InputNumber>
                      <button
                        onClick={() => handleRemoveUnityCoffee(state.id, 1)}
                      >
                        <Minus size={14} weight="bold" />
                      </button>
                      <input
                        type="number"
                        name=""
                        id=""
                        disabled
                        value={state.qtd}
                      />
                      <button onClick={() => handleAddUnityCoffee(state.id, 1)}>
                        <Plus size={14} weight="bold" />
                      </button>
                    </InputNumber> */}
                    <InputNumber funcaoAdd={handleRemoveUnityCoffee} />
                    <Cart />
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
