import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { HomeContainer, TitulosHome } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <div>
        <TitulosHome>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitulosHome>
        <div>
          <div>
            <div>
              <ShoppingCart size={16} weight="fill" />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Timer size={16} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </div>
          </div>
          <div>
            <div>
              <Package size={16} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Coffee size={16} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="./assets/coffeeHome.svg" alt="" />
      </div>
    </HomeContainer>
  )
}
