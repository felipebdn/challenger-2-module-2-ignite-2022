import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CartContainer, InputNumberContainer } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <ShoppingCart size={22} weight="fill" />
      <span>33</span>
    </CartContainer>
  )
}

export function InputNumber() {
  return (
    <InputNumberContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <input type="number" value={1} name="" id="" disabled />
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </InputNumberContainer>
  )
}
