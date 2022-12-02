import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeesContext'
import { CartContainer } from './styles'

export function Cart() {
  const { totalCoffeesInCart } = useContext(CoffeesContext)

  return (
    <CartContainer>
      <ShoppingCart size={22} weight="fill" />
      <span>{totalCoffeesInCart}</span>
    </CartContainer>
  )
}

export function InputNumber() {
  return (
    <></>
    // <InputNumberContainer>
    //   <button>
    //     <Minus size={14} weight="bold" />
    //   </button>
    //   <input type="number" value={1} name="" id="" disabled />
    //   <button>
    //     <Plus size={14} weight="bold" />
    //   </button>
    // </InputNumberContainer>
  )
}
