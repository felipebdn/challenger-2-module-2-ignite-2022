import { CaretRight, MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import {
  CartContainer,
  HeaderContainer,
  InputCepContainer,
  LocationStyle,
} from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeesContext'

export function Header() {
  const { coffeesInCart, checkCep } = useContext(CoffeesContext)
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src="./assets/Logo.svg" alt="" />
      </NavLink>
      <div>
        <InputCepContainer
          onSubmit={(event) => {
            event.preventDefault()
            checkCep()
          }}
        >
          <input type="text" placeholder="Digite seu cep" />
          <button type="submit">
            <CaretRight size={22} weight="bold" />
          </button>
        </InputCepContainer>
        <LocationStyle>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationStyle>
        <NavLink to="/checkout">
          <CartContainer>
            <ShoppingCart size={22} weight="fill" />
            <span>{coffeesInCart.length}</span>
          </CartContainer>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
