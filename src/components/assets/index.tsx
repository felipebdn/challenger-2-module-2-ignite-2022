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

interface InputNumberProps {
  funcaoAdd: (id: string, qtd: number) => void
}

export function InputNumber({ funcaoAdd }: InputNumberProps) {
  return (
    <InputNumberContainer>
      <button onClick={() => funcaoAdd(state.id, 1)}>
        <Minus size={14} weight="bold" />
      </button>
      <input type="number" value={1} name="" id="" disabled />
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </InputNumberContainer>
  )
}
