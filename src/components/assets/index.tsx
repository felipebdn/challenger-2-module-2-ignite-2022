import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
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
  funcaoAdd: (id: string) => void
}

export function InputNumber({ funcaoAdd }: InputNumberProps) {
  const [number, setNumber] = useState(1)
  return (
    <InputNumberContainer>
      <button onClick={() => funcaoAdd('add')}>
        <Minus size={14} weight="bold" />
      </button>
      <input type="number" value={number} name="" id="" disabled />
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </InputNumberContainer>
  )
}
