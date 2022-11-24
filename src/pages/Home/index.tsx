import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  AtributesCoffee,
  CartHomeHeader,
  HomeContainer,
  TitleHome,
} from './styles'
// import { ShoppingCart } from 'phosphor-react'
export function Home() {
  return (
    <HomeContainer>
      <main>
        <TitleHome>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleHome>
        <AtributesCoffee>
          <aside>
            <CartHomeHeader>
              <ShoppingCart size={16} weight="fill" />
              <span>Compra simples e segura</span>
            </CartHomeHeader>
            <CartHomeHeader>
              <Timer size={16} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </CartHomeHeader>
          </aside>
          <aside>
            <CartHomeHeader>
              <Package size={16} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </CartHomeHeader>
            <CartHomeHeader>
              <Coffee size={16} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </CartHomeHeader>
          </aside>
        </AtributesCoffee>
      </main>
      <aside>
        <img src="./assets/coffeeHome.svg" alt="" />
      </aside>
    </HomeContainer>
  )
}
