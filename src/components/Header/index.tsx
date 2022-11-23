import { MapPin } from 'phosphor-react'
import { Cart } from '../assets'
import { HeaderContainer, LocationStyle } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src="./assets/Logo.svg" alt="" />
      <div>
        <LocationStyle>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationStyle>
        <Cart />
      </div>
    </HeaderContainer>
  )
}
