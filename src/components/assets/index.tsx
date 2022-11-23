import { ShoppingCart } from 'phosphor-react'
import { CartContainer } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <ShoppingCart size={22} weight="fill" />
      <span>33</span>
    </CartContainer>
  )
}