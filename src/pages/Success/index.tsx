import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  CardInfoSuccess,
  MainRequestOrder,
  SuccessContainer,
  TituloOrderSuccess,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <TituloOrderSuccess>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TituloOrderSuccess>
      <MainRequestOrder>
        <CardInfoSuccess>
          <div>
            <span>
              <MapPin size={16} weight="fill" />
            </span>
            <p>
              Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
              Alegre, RS
            </p>
          </div>
          <div>
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <p>
              Previsão de entrega <b>20 min - 30 min</b>{' '}
            </p>
          </div>
          <div>
            <span>
              <CurrencyDollar size={16} />
            </span>
            <p>
              Pagamento na entrega <b>Cartão de Crédito</b>
            </p>
          </div>
        </CardInfoSuccess>
        <img src="./assets/ilustration.svg" alt="" />
      </MainRequestOrder>
    </SuccessContainer>
  )
}
