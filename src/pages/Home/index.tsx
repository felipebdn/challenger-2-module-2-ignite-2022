import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { HomeContainer, TitleHome } from './styles'
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
        <div>
          <ShoppingCart size={16} weight="fill" />
          <span>Compra simples e segura</span>
          <Timer size={16} weight="fill" />
          <span>Entrega rápida e rastreada</span>
          <Package size={16} weight="fill" />
          <span>Embalagem mantém o café intacto</span>
          <Coffee size={16} weight="fill" />
          <span>O café chega fresquinho até você</span>
        </div>
      </main>
      <aside>
        <img src="./assets/coffeeHome.svg" alt="" />
      </aside>
    </HomeContainer>
  )
}
